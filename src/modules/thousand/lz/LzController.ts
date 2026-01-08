import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lz")
export default class LzController {
  @operation({
    summary: "Get Lz",
  })
  @get()
  static getLz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lz",
  })
  @post("{id}")
  static createLz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
