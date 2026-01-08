import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksi")
export default class KsiController {
  @operation({
    summary: "Get Ksi",
  })
  @get()
  static getKsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksi",
  })
  @post("{id}")
  static createKsi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
