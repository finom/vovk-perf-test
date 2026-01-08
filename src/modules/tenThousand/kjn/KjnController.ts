import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjn")
export default class KjnController {
  @operation({
    summary: "Get Kjn",
  })
  @get()
  static getKjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjn",
  })
  @post("{id}")
  static createKjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
