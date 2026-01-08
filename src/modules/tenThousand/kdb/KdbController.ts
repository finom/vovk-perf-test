import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kdb")
export default class KdbController {
  @operation({
    summary: "Get Kdb",
  })
  @get()
  static getKdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdb",
  })
  @post("{id}")
  static createKdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
