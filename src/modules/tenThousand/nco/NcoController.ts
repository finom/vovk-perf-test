import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nco")
export default class NcoController {
  @operation({
    summary: "Get Nco",
  })
  @get()
  static getNco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nco",
  })
  @post("{id}")
  static createNco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
