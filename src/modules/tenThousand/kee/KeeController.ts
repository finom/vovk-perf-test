import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kee")
export default class KeeController {
  @operation({
    summary: "Get Kee",
  })
  @get()
  static getKee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kee",
  })
  @post("{id}")
  static createKee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
