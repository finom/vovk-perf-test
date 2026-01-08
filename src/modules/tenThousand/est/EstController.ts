import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("est")
export default class EstController {
  @operation({
    summary: "Get Est",
  })
  @get()
  static getEst = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Est",
  })
  @post("{id}")
  static createEst = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
