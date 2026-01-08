import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("auu")
export default class AuuController {
  @operation({
    summary: "Get Auu",
  })
  @get()
  static getAuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auu",
  })
  @post("{id}")
  static createAuu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
