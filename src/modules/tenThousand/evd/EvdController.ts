import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evd")
export default class EvdController {
  @operation({
    summary: "Get Evd",
  })
  @get()
  static getEvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evd",
  })
  @post("{id}")
  static createEvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
