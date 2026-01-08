import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kra")
export default class KraController {
  @operation({
    summary: "Get Kra",
  })
  @get()
  static getKra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kra",
  })
  @post("{id}")
  static createKra = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
