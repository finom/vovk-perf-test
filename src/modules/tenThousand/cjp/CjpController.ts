import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjp")
export default class CjpController {
  @operation({
    summary: "Get Cjp",
  })
  @get()
  static getCjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjp",
  })
  @post("{id}")
  static createCjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
