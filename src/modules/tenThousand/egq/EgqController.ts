import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egq")
export default class EgqController {
  @operation({
    summary: "Get Egq",
  })
  @get()
  static getEgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egq",
  })
  @post("{id}")
  static createEgq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
