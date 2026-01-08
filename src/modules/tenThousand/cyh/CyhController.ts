import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyh")
export default class CyhController {
  @operation({
    summary: "Get Cyh",
  })
  @get()
  static getCyh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyh",
  })
  @post("{id}")
  static createCyh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
