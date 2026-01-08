import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyn")
export default class HynController {
  @operation({
    summary: "Get Hyn",
  })
  @get()
  static getHyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyn",
  })
  @post("{id}")
  static createHyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
