import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ezu")
export default class EzuController {
  @operation({
    summary: "Get Ezu",
  })
  @get()
  static getEzu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezu",
  })
  @post("{id}")
  static createEzu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
