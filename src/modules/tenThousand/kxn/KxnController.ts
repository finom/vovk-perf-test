import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxn")
export default class KxnController {
  @operation({
    summary: "Get Kxn",
  })
  @get()
  static getKxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxn",
  })
  @post("{id}")
  static createKxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
