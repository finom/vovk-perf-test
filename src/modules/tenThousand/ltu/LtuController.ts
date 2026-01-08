import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltu")
export default class LtuController {
  @operation({
    summary: "Get Ltu",
  })
  @get()
  static getLtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltu",
  })
  @post("{id}")
  static createLtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
