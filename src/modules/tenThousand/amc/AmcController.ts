import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amc")
export default class AmcController {
  @operation({
    summary: "Get Amc",
  })
  @get()
  static getAmc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amc",
  })
  @post("{id}")
  static createAmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
