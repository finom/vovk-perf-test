import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fch")
export default class FchController {
  @operation({
    summary: "Get Fch",
  })
  @get()
  static getFch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fch",
  })
  @post("{id}")
  static createFch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
