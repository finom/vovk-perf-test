import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgd")
export default class MgdController {
  @operation({
    summary: "Get Mgd",
  })
  @get()
  static getMgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgd",
  })
  @post("{id}")
  static createMgd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
