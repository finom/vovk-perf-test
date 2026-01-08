import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azw")
export default class AzwController {
  @operation({
    summary: "Get Azw",
  })
  @get()
  static getAzw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azw",
  })
  @post("{id}")
  static createAzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
