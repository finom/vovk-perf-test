import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgw")
export default class MgwController {
  @operation({
    summary: "Get Mgw",
  })
  @get()
  static getMgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgw",
  })
  @post("{id}")
  static createMgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
