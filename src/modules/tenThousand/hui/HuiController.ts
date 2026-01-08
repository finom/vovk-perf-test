import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hui")
export default class HuiController {
  @operation({
    summary: "Get Hui",
  })
  @get()
  static getHui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hui",
  })
  @post("{id}")
  static createHui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
