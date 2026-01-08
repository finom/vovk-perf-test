import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azg")
export default class AzgController {
  @operation({
    summary: "Get Azg",
  })
  @get()
  static getAzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azg",
  })
  @post("{id}")
  static createAzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
