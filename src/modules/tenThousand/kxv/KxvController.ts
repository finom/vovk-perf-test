import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxv")
export default class KxvController {
  @operation({
    summary: "Get Kxv",
  })
  @get()
  static getKxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxv",
  })
  @post("{id}")
  static createKxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
