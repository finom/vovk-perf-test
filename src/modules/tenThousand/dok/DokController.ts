import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dok")
export default class DokController {
  @operation({
    summary: "Get Dok",
  })
  @get()
  static getDok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dok",
  })
  @post("{id}")
  static createDok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
