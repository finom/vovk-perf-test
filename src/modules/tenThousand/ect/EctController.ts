import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ect")
export default class EctController {
  @operation({
    summary: "Get Ect",
  })
  @get()
  static getEct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ect",
  })
  @post("{id}")
  static createEct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
