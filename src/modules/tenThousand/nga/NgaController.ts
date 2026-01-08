import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nga")
export default class NgaController {
  @operation({
    summary: "Get Nga",
  })
  @get()
  static getNga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nga",
  })
  @post("{id}")
  static createNga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
