import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("abj")
export default class AbjController {
  @operation({
    summary: "Get Abj",
  })
  @get()
  static getAbj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abj",
  })
  @post("{id}")
  static createAbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
