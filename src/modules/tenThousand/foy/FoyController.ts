import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("foy")
export default class FoyController {
  @operation({
    summary: "Get Foy",
  })
  @get()
  static getFoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foy",
  })
  @post("{id}")
  static createFoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
