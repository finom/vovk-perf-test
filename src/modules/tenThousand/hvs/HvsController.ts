import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvs")
export default class HvsController {
  @operation({
    summary: "Get Hvs",
  })
  @get()
  static getHvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvs",
  })
  @post("{id}")
  static createHvs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
