import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbr")
export default class MbrController {
  @operation({
    summary: "Get Mbr",
  })
  @get()
  static getMbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mbr",
  })
  @post("{id}")
  static createMbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
