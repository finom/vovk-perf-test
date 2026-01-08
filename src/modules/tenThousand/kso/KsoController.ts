import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kso")
export default class KsoController {
  @operation({
    summary: "Get Kso",
  })
  @get()
  static getKso = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kso",
  })
  @post("{id}")
  static createKso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
