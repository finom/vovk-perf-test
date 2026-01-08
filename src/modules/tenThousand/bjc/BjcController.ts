import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjc")
export default class BjcController {
  @operation({
    summary: "Get Bjc",
  })
  @get()
  static getBjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjc",
  })
  @post("{id}")
  static createBjc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
