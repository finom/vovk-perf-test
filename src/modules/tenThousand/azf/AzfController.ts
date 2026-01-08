import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azf")
export default class AzfController {
  @operation({
    summary: "Get Azf",
  })
  @get()
  static getAzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azf",
  })
  @post("{id}")
  static createAzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
