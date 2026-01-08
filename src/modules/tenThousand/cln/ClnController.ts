import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cln")
export default class ClnController {
  @operation({
    summary: "Get Cln",
  })
  @get()
  static getCln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cln",
  })
  @post("{id}")
  static createCln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
