import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mta")
export default class MtaController {
  @operation({
    summary: "Get Mta",
  })
  @get()
  static getMta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mta",
  })
  @post("{id}")
  static createMta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
