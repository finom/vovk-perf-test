import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kga")
export default class KgaController {
  @operation({
    summary: "Get Kga",
  })
  @get()
  static getKga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kga",
  })
  @post("{id}")
  static createKga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
