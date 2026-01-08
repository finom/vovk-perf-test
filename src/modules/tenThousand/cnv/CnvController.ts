import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnv")
export default class CnvController {
  @operation({
    summary: "Get Cnv",
  })
  @get()
  static getCnv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnv",
  })
  @post("{id}")
  static createCnv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
