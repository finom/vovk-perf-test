import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eor")
export default class EorController {
  @operation({
    summary: "Get Eor",
  })
  @get()
  static getEor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eor",
  })
  @post("{id}")
  static createEor = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
