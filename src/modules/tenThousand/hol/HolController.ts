import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hol")
export default class HolController {
  @operation({
    summary: "Get Hol",
  })
  @get()
  static getHol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hol",
  })
  @post("{id}")
  static createHol = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
