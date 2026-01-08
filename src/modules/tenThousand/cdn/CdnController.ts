import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cdn")
export default class CdnController {
  @operation({
    summary: "Get Cdn",
  })
  @get()
  static getCdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdn",
  })
  @post("{id}")
  static createCdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
