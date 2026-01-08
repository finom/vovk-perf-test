import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmu")
export default class BmuController {
  @operation({
    summary: "Get Bmu",
  })
  @get()
  static getBmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bmu",
  })
  @post("{id}")
  static createBmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
