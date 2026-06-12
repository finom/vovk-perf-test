import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlq")
export default class HlqController {
  @operation({
    summary: "Get Hlq",
  })
  @get()
  static getHlq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlq",
  })
  @post("{id}")
  static createHlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
