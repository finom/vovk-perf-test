import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccp")
export default class CcpController {
  @operation({
    summary: "Get Ccp",
  })
  @get()
  static getCcp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccp",
  })
  @post("{id}")
  static createCcp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
