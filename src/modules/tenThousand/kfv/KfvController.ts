import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfv")
export default class KfvController {
  @operation({
    summary: "Get Kfv",
  })
  @get()
  static getKfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfv",
  })
  @post("{id}")
  static createKfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
