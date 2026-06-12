import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnn")
export default class BnnController {
  @operation({
    summary: "Get Bnn",
  })
  @get()
  static getBnn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnn",
  })
  @post("{id}")
  static createBnn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
