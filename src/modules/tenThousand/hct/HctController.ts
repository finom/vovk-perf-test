import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hct")
export default class HctController {
  @operation({
    summary: "Get Hct",
  })
  @get()
  static getHct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hct",
  })
  @post("{id}")
  static createHct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
