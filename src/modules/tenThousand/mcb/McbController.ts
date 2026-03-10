import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcb")
export default class McbController {
  @operation({
    summary: "Get Mcb",
  })
  @get()
  static getMcb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mcb",
  })
  @post("{id}")
  static createMcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
