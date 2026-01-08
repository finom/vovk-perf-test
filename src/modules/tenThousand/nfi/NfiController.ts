import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfi")
export default class NfiController {
  @operation({
    summary: "Get Nfi",
  })
  @get()
  static getNfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfi",
  })
  @post("{id}")
  static createNfi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
