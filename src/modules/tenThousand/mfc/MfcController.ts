import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfc")
export default class MfcController {
  @operation({
    summary: "Get Mfc",
  })
  @get()
  static getMfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mfc",
  })
  @post("{id}")
  static createMfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
