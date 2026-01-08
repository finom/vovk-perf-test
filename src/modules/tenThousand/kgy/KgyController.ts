import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgy")
export default class KgyController {
  @operation({
    summary: "Get Kgy",
  })
  @get()
  static getKgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgy",
  })
  @post("{id}")
  static createKgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
