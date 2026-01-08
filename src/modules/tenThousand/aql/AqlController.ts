import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aql")
export default class AqlController {
  @operation({
    summary: "Get Aql",
  })
  @get()
  static getAql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aql",
  })
  @post("{id}")
  static createAql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
