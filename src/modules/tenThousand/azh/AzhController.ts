import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azh")
export default class AzhController {
  @operation({
    summary: "Get Azh",
  })
  @get()
  static getAzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Azh",
  })
  @post("{id}")
  static createAzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
