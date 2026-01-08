import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lle")
export default class LleController {
  @operation({
    summary: "Get Lle",
  })
  @get()
  static getLle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lle",
  })
  @post("{id}")
  static createLle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
