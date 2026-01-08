import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lva")
export default class LvaController {
  @operation({
    summary: "Get Lva",
  })
  @get()
  static getLva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lva",
  })
  @post("{id}")
  static createLva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
