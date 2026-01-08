import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhn")
export default class HhnController {
  @operation({
    summary: "Get Hhn",
  })
  @get()
  static getHhn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhn",
  })
  @post("{id}")
  static createHhn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
