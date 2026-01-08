import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fbl")
export default class FblController {
  @operation({
    summary: "Get Fbl",
  })
  @get()
  static getFbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbl",
  })
  @post("{id}")
  static createFbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
