import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aej")
export default class AejController {
  @operation({
    summary: "Get Aej",
  })
  @get()
  static getAej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aej",
  })
  @post("{id}")
  static createAej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
