import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atz")
export default class AtzController {
  @operation({
    summary: "Get Atz",
  })
  @get()
  static getAtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atz",
  })
  @post("{id}")
  static createAtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
