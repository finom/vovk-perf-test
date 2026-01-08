import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqq")
export default class CqqController {
  @operation({
    summary: "Get Cqq",
  })
  @get()
  static getCqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cqq",
  })
  @post("{id}")
  static createCqq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
