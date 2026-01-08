import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gga")
export default class GgaController {
  @operation({
    summary: "Get Gga",
  })
  @get()
  static getGga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gga",
  })
  @post("{id}")
  static createGga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
