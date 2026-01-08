import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjj")
export default class BjjController {
  @operation({
    summary: "Get Bjj",
  })
  @get()
  static getBjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjj",
  })
  @post("{id}")
  static createBjj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
