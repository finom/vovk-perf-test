import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nct")
export default class NctController {
  @operation({
    summary: "Get Nct",
  })
  @get()
  static getNct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nct",
  })
  @post("{id}")
  static createNct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
