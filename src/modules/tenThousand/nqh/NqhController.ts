import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqh")
export default class NqhController {
  @operation({
    summary: "Get Nqh",
  })
  @get()
  static getNqh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqh",
  })
  @post("{id}")
  static createNqh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
