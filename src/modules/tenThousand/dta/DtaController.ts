import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dta")
export default class DtaController {
  @operation({
    summary: "Get Dta",
  })
  @get()
  static getDta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dta",
  })
  @post("{id}")
  static createDta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
