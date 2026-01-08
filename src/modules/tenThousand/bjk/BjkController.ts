import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjk")
export default class BjkController {
  @operation({
    summary: "Get Bjk",
  })
  @get()
  static getBjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjk",
  })
  @post("{id}")
  static createBjk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
