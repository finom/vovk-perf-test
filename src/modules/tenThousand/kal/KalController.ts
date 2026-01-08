import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kal")
export default class KalController {
  @operation({
    summary: "Get Kal",
  })
  @get()
  static getKal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kal",
  })
  @post("{id}")
  static createKal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
