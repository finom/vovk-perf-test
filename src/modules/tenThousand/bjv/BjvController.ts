import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjv")
export default class BjvController {
  @operation({
    summary: "Get Bjv",
  })
  @get()
  static getBjv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjv",
  })
  @post("{id}")
  static createBjv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
