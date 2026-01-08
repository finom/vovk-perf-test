import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uj")
export default class UjController {
  @operation({
    summary: "Get Uj",
  })
  @get()
  static getUj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uj",
  })
  @post("{id}")
  static createUj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
