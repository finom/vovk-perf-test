import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("civ")
export default class CivController {
  @operation({
    summary: "Get Civ",
  })
  @get()
  static getCiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Civ",
  })
  @post("{id}")
  static createCiv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
