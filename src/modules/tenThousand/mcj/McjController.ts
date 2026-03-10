import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcj")
export default class McjController {
  @operation({
    summary: "Get Mcj",
  })
  @get()
  static getMcj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mcj",
  })
  @post("{id}")
  static createMcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
