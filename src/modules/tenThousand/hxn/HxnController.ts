import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxn")
export default class HxnController {
  @operation({
    summary: "Get Hxn",
  })
  @get()
  static getHxn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxn",
  })
  @post("{id}")
  static createHxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
