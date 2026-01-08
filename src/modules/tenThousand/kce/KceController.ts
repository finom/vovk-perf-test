import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kce")
export default class KceController {
  @operation({
    summary: "Get Kce",
  })
  @get()
  static getKce = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kce",
  })
  @post("{id}")
  static createKce = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
