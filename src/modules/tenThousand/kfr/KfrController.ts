import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfr")
export default class KfrController {
  @operation({
    summary: "Get Kfr",
  })
  @get()
  static getKfr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfr",
  })
  @post("{id}")
  static createKfr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
