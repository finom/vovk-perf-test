import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fco")
export default class FcoController {
  @operation({
    summary: "Get Fco",
  })
  @get()
  static getFco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fco",
  })
  @post("{id}")
  static createFco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
