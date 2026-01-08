import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azx")
export default class AzxController {
  @operation({
    summary: "Get Azx",
  })
  @get()
  static getAzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azx",
  })
  @post("{id}")
  static createAzx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
