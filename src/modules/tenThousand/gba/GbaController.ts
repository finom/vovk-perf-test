import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gba")
export default class GbaController {
  @operation({
    summary: "Get Gba",
  })
  @get()
  static getGba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gba",
  })
  @post("{id}")
  static createGba = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
