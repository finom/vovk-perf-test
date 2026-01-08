import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mgc")
export default class MgcController {
  @operation({
    summary: "Get Mgc",
  })
  @get()
  static getMgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mgc",
  })
  @post("{id}")
  static createMgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
