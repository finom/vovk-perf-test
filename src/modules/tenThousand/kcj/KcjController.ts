import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kcj")
export default class KcjController {
  @operation({
    summary: "Get Kcj",
  })
  @get()
  static getKcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcj",
  })
  @post("{id}")
  static createKcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
