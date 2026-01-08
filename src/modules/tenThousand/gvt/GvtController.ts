import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvt")
export default class GvtController {
  @operation({
    summary: "Get Gvt",
  })
  @get()
  static getGvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvt",
  })
  @post("{id}")
  static createGvt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
