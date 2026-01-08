import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gul")
export default class GulController {
  @operation({
    summary: "Get Gul",
  })
  @get()
  static getGul = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gul",
  })
  @post("{id}")
  static createGul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
