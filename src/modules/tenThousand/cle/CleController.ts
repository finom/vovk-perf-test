import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cle")
export default class CleController {
  @operation({
    summary: "Get Cle",
  })
  @get()
  static getCle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cle",
  })
  @post("{id}")
  static createCle = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
