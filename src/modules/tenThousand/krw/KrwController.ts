import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krw")
export default class KrwController {
  @operation({
    summary: "Get Krw",
  })
  @get()
  static getKrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krw",
  })
  @post("{id}")
  static createKrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
