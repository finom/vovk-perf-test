import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("csr")
export default class CsrController {
  @operation({
    summary: "Get Csr",
  })
  @get()
  static getCsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csr",
  })
  @post("{id}")
  static createCsr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
