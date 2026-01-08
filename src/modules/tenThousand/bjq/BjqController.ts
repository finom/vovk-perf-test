import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjq")
export default class BjqController {
  @operation({
    summary: "Get Bjq",
  })
  @get()
  static getBjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjq",
  })
  @post("{id}")
  static createBjq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
