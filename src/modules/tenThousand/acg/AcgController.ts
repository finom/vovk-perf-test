import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acg")
export default class AcgController {
  @operation({
    summary: "Get Acg",
  })
  @get()
  static getAcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acg",
  })
  @post("{id}")
  static createAcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
