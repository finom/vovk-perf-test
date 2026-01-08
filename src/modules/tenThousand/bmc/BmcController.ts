import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmc")
export default class BmcController {
  @operation({
    summary: "Get Bmc",
  })
  @get()
  static getBmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmc",
  })
  @post("{id}")
  static createBmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
