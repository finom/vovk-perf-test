import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egc")
export default class EgcController {
  @operation({
    summary: "Get Egc",
  })
  @get()
  static getEgc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egc",
  })
  @post("{id}")
  static createEgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
