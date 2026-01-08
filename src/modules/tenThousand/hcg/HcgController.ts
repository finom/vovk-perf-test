import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcg")
export default class HcgController {
  @operation({
    summary: "Get Hcg",
  })
  @get()
  static getHcg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcg",
  })
  @post("{id}")
  static createHcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
