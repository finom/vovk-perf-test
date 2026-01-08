import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("za")
export default class ZaController {
  @operation({
    summary: "Get Za",
  })
  @get()
  static getZa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Za",
  })
  @post("{id}")
  static createZa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
