import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlx")
export default class HlxController {
  @operation({
    summary: "Get Hlx",
  })
  @get()
  static getHlx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlx",
  })
  @post("{id}")
  static createHlx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
