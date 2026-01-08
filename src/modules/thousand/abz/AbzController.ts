import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abz")
export default class AbzController {
  @operation({
    summary: "Get Abz",
  })
  @get()
  static getAbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abz",
  })
  @post("{id}")
  static createAbz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
