import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyg")
export default class LygController {
  @operation({
    summary: "Get Lyg",
  })
  @get()
  static getLyg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyg",
  })
  @post("{id}")
  static createLyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
