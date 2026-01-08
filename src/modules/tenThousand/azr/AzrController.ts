import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azr")
export default class AzrController {
  @operation({
    summary: "Get Azr",
  })
  @get()
  static getAzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azr",
  })
  @post("{id}")
  static createAzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
