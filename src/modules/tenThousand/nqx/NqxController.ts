import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqx")
export default class NqxController {
  @operation({
    summary: "Get Nqx",
  })
  @get()
  static getNqx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqx",
  })
  @post("{id}")
  static createNqx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
