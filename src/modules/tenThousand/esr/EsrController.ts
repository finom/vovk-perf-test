import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("esr")
export default class EsrController {
  @operation({
    summary: "Get Esr",
  })
  @get()
  static getEsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Esr",
  })
  @post("{id}")
  static createEsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
