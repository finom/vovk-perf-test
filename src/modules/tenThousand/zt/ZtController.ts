import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zt")
export default class ZtController {
  @operation({
    summary: "Get Zt",
  })
  @get()
  static getZt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zt",
  })
  @post("{id}")
  static createZt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
