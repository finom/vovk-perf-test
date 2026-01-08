import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hcw")
export default class HcwController {
  @operation({
    summary: "Get Hcw",
  })
  @get()
  static getHcw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcw",
  })
  @post("{id}")
  static createHcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
