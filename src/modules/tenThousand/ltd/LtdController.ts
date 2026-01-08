import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltd")
export default class LtdController {
  @operation({
    summary: "Get Ltd",
  })
  @get()
  static getLtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltd",
  })
  @post("{id}")
  static createLtd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
