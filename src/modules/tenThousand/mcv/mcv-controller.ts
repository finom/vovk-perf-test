import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcv")
export default class McvController {
  @operation({
    summary: "Get Mcv",
  })
  @get()
  static getMcv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mcv",
  })
  @post("{id}")
  static createMcv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
