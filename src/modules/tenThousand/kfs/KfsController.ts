import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfs")
export default class KfsController {
  @operation({
    summary: "Get Kfs",
  })
  @get()
  static getKfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfs",
  })
  @post("{id}")
  static createKfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
