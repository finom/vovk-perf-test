import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjm")
export default class BjmController {
  @operation({
    summary: "Get Bjm",
  })
  @get()
  static getBjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjm",
  })
  @post("{id}")
  static createBjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
