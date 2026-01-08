import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvi")
export default class KviController {
  @operation({
    summary: "Get Kvi",
  })
  @get()
  static getKvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvi",
  })
  @post("{id}")
  static createKvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
