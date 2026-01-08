import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ahh")
export default class AhhController {
  @operation({
    summary: "Get Ahh",
  })
  @get()
  static getAhh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahh",
  })
  @post("{id}")
  static createAhh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
