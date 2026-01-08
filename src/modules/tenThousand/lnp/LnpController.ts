import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lnp")
export default class LnpController {
  @operation({
    summary: "Get Lnp",
  })
  @get()
  static getLnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnp",
  })
  @post("{id}")
  static createLnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
