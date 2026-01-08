import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lar")
export default class LarController {
  @operation({
    summary: "Get Lar",
  })
  @get()
  static getLar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lar",
  })
  @post("{id}")
  static createLar = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
