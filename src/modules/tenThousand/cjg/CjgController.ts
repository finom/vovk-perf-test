import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjg")
export default class CjgController {
  @operation({
    summary: "Get Cjg",
  })
  @get()
  static getCjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjg",
  })
  @post("{id}")
  static createCjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
