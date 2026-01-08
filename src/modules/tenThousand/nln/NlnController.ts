import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nln")
export default class NlnController {
  @operation({
    summary: "Get Nln",
  })
  @get()
  static getNln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nln",
  })
  @post("{id}")
  static createNln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
