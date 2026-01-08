import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gni")
export default class GniController {
  @operation({
    summary: "Get Gni",
  })
  @get()
  static getGni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gni",
  })
  @post("{id}")
  static createGni = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
