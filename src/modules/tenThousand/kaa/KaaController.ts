import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kaa")
export default class KaaController {
  @operation({
    summary: "Get Kaa",
  })
  @get()
  static getKaa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaa",
  })
  @post("{id}")
  static createKaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
