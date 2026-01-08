import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kfj")
export default class KfjController {
  @operation({
    summary: "Get Kfj",
  })
  @get()
  static getKfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kfj",
  })
  @post("{id}")
  static createKfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
