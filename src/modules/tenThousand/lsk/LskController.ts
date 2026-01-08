import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsk")
export default class LskController {
  @operation({
    summary: "Get Lsk",
  })
  @get()
  static getLsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsk",
  })
  @post("{id}")
  static createLsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
