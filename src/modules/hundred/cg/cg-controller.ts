import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cg")
export default class CgController {
  @operation({
    summary: "Get Cg",
  })
  @get()
  static getCg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cg",
  })
  @post("{id}")
  static createCg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
