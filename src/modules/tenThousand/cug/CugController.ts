import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cug")
export default class CugController {
  @operation({
    summary: "Get Cug",
  })
  @get()
  static getCug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cug",
  })
  @post("{id}")
  static createCug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
