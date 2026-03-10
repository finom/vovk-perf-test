import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvm")
export default class BvmController {
  @operation({
    summary: "Get Bvm",
  })
  @get()
  static getBvm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bvm",
  })
  @post("{id}")
  static createBvm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
