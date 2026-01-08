import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epa")
export default class EpaController {
  @operation({
    summary: "Get Epa",
  })
  @get()
  static getEpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epa",
  })
  @post("{id}")
  static createEpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
