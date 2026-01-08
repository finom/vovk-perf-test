import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abx")
export default class AbxController {
  @operation({
    summary: "Get Abx",
  })
  @get()
  static getAbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abx",
  })
  @post("{id}")
  static createAbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
