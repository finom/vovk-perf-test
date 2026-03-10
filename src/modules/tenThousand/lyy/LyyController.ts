import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyy")
export default class LyyController {
  @operation({
    summary: "Get Lyy",
  })
  @get()
  static getLyy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyy",
  })
  @post("{id}")
  static createLyy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
