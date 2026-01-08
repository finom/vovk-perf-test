import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ewy")
export default class EwyController {
  @operation({
    summary: "Get Ewy",
  })
  @get()
  static getEwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewy",
  })
  @post("{id}")
  static createEwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
