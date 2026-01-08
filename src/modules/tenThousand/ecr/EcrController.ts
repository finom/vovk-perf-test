import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ecr")
export default class EcrController {
  @operation({
    summary: "Get Ecr",
  })
  @get()
  static getEcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ecr",
  })
  @post("{id}")
  static createEcr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
