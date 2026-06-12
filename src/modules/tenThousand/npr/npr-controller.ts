import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npr")
export default class NprController {
  @operation({
    summary: "Get Npr",
  })
  @get()
  static getNpr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npr",
  })
  @post("{id}")
  static createNpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
