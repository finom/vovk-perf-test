import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("miv")
export default class MivController {
  @operation({
    summary: "Get Miv",
  })
  @get()
  static getMiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Miv",
  })
  @post("{id}")
  static createMiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
