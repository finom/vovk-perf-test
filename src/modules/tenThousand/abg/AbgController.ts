import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abg")
export default class AbgController {
  @operation({
    summary: "Get Abg",
  })
  @get()
  static getAbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abg",
  })
  @post("{id}")
  static createAbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
