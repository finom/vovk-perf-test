import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjl")
export default class BjlController {
  @operation({
    summary: "Get Bjl",
  })
  @get()
  static getBjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjl",
  })
  @post("{id}")
  static createBjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
