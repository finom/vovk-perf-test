import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aax")
export default class AaxController {
  @operation({
    summary: "Get Aax",
  })
  @get()
  static getAax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aax",
  })
  @post("{id}")
  static createAax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
