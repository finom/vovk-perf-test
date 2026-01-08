import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nde")
export default class NdeController {
  @operation({
    summary: "Get Nde",
  })
  @get()
  static getNde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nde",
  })
  @post("{id}")
  static createNde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
