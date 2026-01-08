import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dn")
export default class DnController {
  @operation({
    summary: "Get Dn",
  })
  @get()
  static getDn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dn",
  })
  @post("{id}")
  static createDn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
