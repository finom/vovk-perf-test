import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kke")
export default class KkeController {
  @operation({
    summary: "Get Kke",
  })
  @get()
  static getKke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kke",
  })
  @post("{id}")
  static createKke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
