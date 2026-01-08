import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alp")
export default class AlpController {
  @operation({
    summary: "Get Alp",
  })
  @get()
  static getAlp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alp",
  })
  @post("{id}")
  static createAlp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
