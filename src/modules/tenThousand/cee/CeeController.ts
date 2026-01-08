import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cee")
export default class CeeController {
  @operation({
    summary: "Get Cee",
  })
  @get()
  static getCee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cee",
  })
  @post("{id}")
  static createCee = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
