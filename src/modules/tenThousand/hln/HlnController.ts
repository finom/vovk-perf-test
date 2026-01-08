import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hln")
export default class HlnController {
  @operation({
    summary: "Get Hln",
  })
  @get()
  static getHln = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hln",
  })
  @post("{id}")
  static createHln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
