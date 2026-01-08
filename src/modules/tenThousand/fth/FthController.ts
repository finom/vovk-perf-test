import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fth")
export default class FthController {
  @operation({
    summary: "Get Fth",
  })
  @get()
  static getFth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fth",
  })
  @post("{id}")
  static createFth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
