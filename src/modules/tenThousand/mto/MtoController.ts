import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mto")
export default class MtoController {
  @operation({
    summary: "Get Mto",
  })
  @get()
  static getMto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mto",
  })
  @post("{id}")
  static createMto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
