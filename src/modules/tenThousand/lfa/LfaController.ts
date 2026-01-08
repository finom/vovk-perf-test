import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lfa")
export default class LfaController {
  @operation({
    summary: "Get Lfa",
  })
  @get()
  static getLfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfa",
  })
  @post("{id}")
  static createLfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
