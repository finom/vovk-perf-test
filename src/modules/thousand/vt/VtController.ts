import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vt")
export default class VtController {
  @operation({
    summary: "Get Vt",
  })
  @get()
  static getVt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vt",
  })
  @post("{id}")
  static createVt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
