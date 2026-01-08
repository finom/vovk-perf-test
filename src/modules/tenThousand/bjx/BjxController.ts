import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bjx")
export default class BjxController {
  @operation({
    summary: "Get Bjx",
  })
  @get()
  static getBjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjx",
  })
  @post("{id}")
  static createBjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
