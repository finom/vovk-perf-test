import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edt")
export default class EdtController {
  @operation({
    summary: "Get Edt",
  })
  @get()
  static getEdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edt",
  })
  @post("{id}")
  static createEdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
