import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlp")
export default class HlpController {
  @operation({
    summary: "Get Hlp",
  })
  @get()
  static getHlp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlp",
  })
  @post("{id}")
  static createHlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
