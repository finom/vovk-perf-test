import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("akt")
export default class AktController {
  @operation({
    summary: "Get Akt",
  })
  @get()
  static getAkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akt",
  })
  @post("{id}")
  static createAkt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
