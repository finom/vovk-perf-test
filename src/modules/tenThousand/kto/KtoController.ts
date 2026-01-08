import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kto")
export default class KtoController {
  @operation({
    summary: "Get Kto",
  })
  @get()
  static getKto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kto",
  })
  @post("{id}")
  static createKto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
