import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hc")
export default class HcController {
  @operation({
    summary: "Get Hc",
  })
  @get()
  static getHc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hc",
  })
  @post("{id}")
  static createHc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
