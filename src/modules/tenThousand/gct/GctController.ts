import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gct")
export default class GctController {
  @operation({
    summary: "Get Gct",
  })
  @get()
  static getGct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gct",
  })
  @post("{id}")
  static createGct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
