import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsa")
export default class DsaController {
  @operation({
    summary: "Get Dsa",
  })
  @get()
  static getDsa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsa",
  })
  @post("{id}")
  static createDsa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
