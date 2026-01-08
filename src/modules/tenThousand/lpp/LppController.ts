import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpp")
export default class LppController {
  @operation({
    summary: "Get Lpp",
  })
  @get()
  static getLpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpp",
  })
  @post("{id}")
  static createLpp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
