import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayd")
export default class AydController {
  @operation({
    summary: "Get Ayd",
  })
  @get()
  static getAyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayd",
  })
  @post("{id}")
  static createAyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
