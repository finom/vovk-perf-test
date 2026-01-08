import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcp")
export default class BcpController {
  @operation({
    summary: "Get Bcp",
  })
  @get()
  static getBcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcp",
  })
  @post("{id}")
  static createBcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
