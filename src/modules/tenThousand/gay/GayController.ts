import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gay")
export default class GayController {
  @operation({
    summary: "Get Gay",
  })
  @get()
  static getGay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gay",
  })
  @post("{id}")
  static createGay = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
