import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nme")
export default class NmeController {
  @operation({
    summary: "Get Nme",
  })
  @get()
  static getNme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nme",
  })
  @post("{id}")
  static createNme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
