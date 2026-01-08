import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqi")
export default class NqiController {
  @operation({
    summary: "Get Nqi",
  })
  @get()
  static getNqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqi",
  })
  @post("{id}")
  static createNqi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
