import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atw")
export default class AtwController {
  @operation({
    summary: "Get Atw",
  })
  @get()
  static getAtw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atw",
  })
  @post("{id}")
  static createAtw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
