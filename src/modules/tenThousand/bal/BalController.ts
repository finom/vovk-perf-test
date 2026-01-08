import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bal")
export default class BalController {
  @operation({
    summary: "Get Bal",
  })
  @get()
  static getBal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bal",
  })
  @post("{id}")
  static createBal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
