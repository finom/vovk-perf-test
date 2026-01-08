import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kui")
export default class KuiController {
  @operation({
    summary: "Get Kui",
  })
  @get()
  static getKui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kui",
  })
  @post("{id}")
  static createKui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
