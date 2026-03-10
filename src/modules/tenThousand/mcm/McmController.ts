import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcm")
export default class McmController {
  @operation({
    summary: "Get Mcm",
  })
  @get()
  static getMcm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mcm",
  })
  @post("{id}")
  static createMcm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
