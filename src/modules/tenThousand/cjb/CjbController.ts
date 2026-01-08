import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjb")
export default class CjbController {
  @operation({
    summary: "Get Cjb",
  })
  @get()
  static getCjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjb",
  })
  @post("{id}")
  static createCjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
