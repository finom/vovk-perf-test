import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azb")
export default class AzbController {
  @operation({
    summary: "Get Azb",
  })
  @get()
  static getAzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azb",
  })
  @post("{id}")
  static createAzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
