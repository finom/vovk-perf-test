import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("zp")
export default class ZpController {
  @operation({
    summary: "Get Zp",
  })
  @get()
  static getZp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zp",
  })
  @post("{id}")
  static createZp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
