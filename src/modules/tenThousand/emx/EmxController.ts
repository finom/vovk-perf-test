import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emx")
export default class EmxController {
  @operation({
    summary: "Get Emx",
  })
  @get()
  static getEmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emx",
  })
  @post("{id}")
  static createEmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
