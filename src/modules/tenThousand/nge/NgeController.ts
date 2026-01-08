import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nge")
export default class NgeController {
  @operation({
    summary: "Get Nge",
  })
  @get()
  static getNge = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nge",
  })
  @post("{id}")
  static createNge = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
