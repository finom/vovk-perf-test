import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krx")
export default class KrxController {
  @operation({
    summary: "Get Krx",
  })
  @get()
  static getKrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krx",
  })
  @post("{id}")
  static createKrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
