import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhm")
export default class BhmController {
  @operation({
    summary: "Get Bhm",
  })
  @get()
  static getBhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhm",
  })
  @post("{id}")
  static createBhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
