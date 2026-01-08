import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mke")
export default class MkeController {
  @operation({
    summary: "Get Mke",
  })
  @get()
  static getMke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mke",
  })
  @post("{id}")
  static createMke = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
