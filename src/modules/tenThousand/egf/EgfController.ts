import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egf")
export default class EgfController {
  @operation({
    summary: "Get Egf",
  })
  @get()
  static getEgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egf",
  })
  @post("{id}")
  static createEgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
