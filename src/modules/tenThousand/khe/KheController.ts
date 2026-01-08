import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("khe")
export default class KheController {
  @operation({
    summary: "Get Khe",
  })
  @get()
  static getKhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khe",
  })
  @post("{id}")
  static createKhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
