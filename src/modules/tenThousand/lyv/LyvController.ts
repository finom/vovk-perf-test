import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyv")
export default class LyvController {
  @operation({
    summary: "Get Lyv",
  })
  @get()
  static getLyv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyv",
  })
  @post("{id}")
  static createLyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
