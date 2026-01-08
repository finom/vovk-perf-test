import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kti")
export default class KtiController {
  @operation({
    summary: "Get Kti",
  })
  @get()
  static getKti = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kti",
  })
  @post("{id}")
  static createKti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
