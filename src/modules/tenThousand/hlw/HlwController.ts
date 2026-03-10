import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hlw")
export default class HlwController {
  @operation({
    summary: "Get Hlw",
  })
  @get()
  static getHlw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hlw",
  })
  @post("{id}")
  static createHlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
