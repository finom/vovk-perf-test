import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kod")
export default class KodController {
  @operation({
    summary: "Get Kod",
  })
  @get()
  static getKod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kod",
  })
  @post("{id}")
  static createKod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
