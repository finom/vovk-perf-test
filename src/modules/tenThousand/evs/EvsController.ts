import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("evs")
export default class EvsController {
  @operation({
    summary: "Get Evs",
  })
  @get()
  static getEvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evs",
  })
  @post("{id}")
  static createEvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
