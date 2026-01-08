import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyb")
export default class CybController {
  @operation({
    summary: "Get Cyb",
  })
  @get()
  static getCyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyb",
  })
  @post("{id}")
  static createCyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
