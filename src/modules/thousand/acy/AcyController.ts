import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acy")
export default class AcyController {
  @operation({
    summary: "Get Acy",
  })
  @get()
  static getAcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acy",
  })
  @post("{id}")
  static createAcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
