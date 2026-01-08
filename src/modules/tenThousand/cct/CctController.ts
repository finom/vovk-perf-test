import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cct")
export default class CctController {
  @operation({
    summary: "Get Cct",
  })
  @get()
  static getCct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cct",
  })
  @post("{id}")
  static createCct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
