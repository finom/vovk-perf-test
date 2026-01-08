import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evw")
export default class EvwController {
  @operation({
    summary: "Get Evw",
  })
  @get()
  static getEvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evw",
  })
  @post("{id}")
  static createEvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
