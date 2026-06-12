import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlu")
export default class MluController {
  @operation({
    summary: "Get Mlu",
  })
  @get()
  static getMlu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mlu",
  })
  @post("{id}")
  static createMlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
