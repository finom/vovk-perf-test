import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("koy")
export default class KoyController {
  @operation({
    summary: "Get Koy",
  })
  @get()
  static getKoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Koy",
  })
  @post("{id}")
  static createKoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
