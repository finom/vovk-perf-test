import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abq")
export default class AbqController {
  @operation({
    summary: "Get Abq",
  })
  @get()
  static getAbq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abq",
  })
  @post("{id}")
  static createAbq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
