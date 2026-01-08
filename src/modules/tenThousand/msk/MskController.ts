import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msk")
export default class MskController {
  @operation({
    summary: "Get Msk",
  })
  @get()
  static getMsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msk",
  })
  @post("{id}")
  static createMsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
