import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcq")
export default class McqController {
  @operation({
    summary: "Get Mcq",
  })
  @get()
  static getMcq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mcq",
  })
  @post("{id}")
  static createMcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
