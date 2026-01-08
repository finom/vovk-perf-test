import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frm")
export default class FrmController {
  @operation({
    summary: "Get Frm",
  })
  @get()
  static getFrm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frm",
  })
  @post("{id}")
  static createFrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
