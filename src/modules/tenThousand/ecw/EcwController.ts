import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecw")
export default class EcwController {
  @operation({
    summary: "Get Ecw",
  })
  @get()
  static getEcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecw",
  })
  @post("{id}")
  static createEcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
