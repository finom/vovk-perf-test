import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cnu")
export default class CnuController {
  @operation({
    summary: "Get Cnu",
  })
  @get()
  static getCnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnu",
  })
  @post("{id}")
  static createCnu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
