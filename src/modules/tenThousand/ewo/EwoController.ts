import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewo")
export default class EwoController {
  @operation({
    summary: "Get Ewo",
  })
  @get()
  static getEwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewo",
  })
  @post("{id}")
  static createEwo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
