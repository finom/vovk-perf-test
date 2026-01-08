import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bta")
export default class BtaController {
  @operation({
    summary: "Get Bta",
  })
  @get()
  static getBta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bta",
  })
  @post("{id}")
  static createBta = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
