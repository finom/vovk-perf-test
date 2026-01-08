import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjp")
export default class BjpController {
  @operation({
    summary: "Get Bjp",
  })
  @get()
  static getBjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjp",
  })
  @post("{id}")
  static createBjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
