import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmm")
export default class DmmController {
  @operation({
    summary: "Get Dmm",
  })
  @get()
  static getDmm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmm",
  })
  @post("{id}")
  static createDmm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
