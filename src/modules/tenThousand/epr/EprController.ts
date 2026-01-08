import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("epr")
export default class EprController {
  @operation({
    summary: "Get Epr",
  })
  @get()
  static getEpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epr",
  })
  @post("{id}")
  static createEpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
