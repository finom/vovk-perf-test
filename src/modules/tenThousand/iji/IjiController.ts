import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iji")
export default class IjiController {
  @operation({
    summary: "Get Iji",
  })
  @get()
  static getIji = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iji",
  })
  @post("{id}")
  static createIji = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
