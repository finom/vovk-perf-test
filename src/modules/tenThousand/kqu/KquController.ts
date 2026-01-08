import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqu")
export default class KquController {
  @operation({
    summary: "Get Kqu",
  })
  @get()
  static getKqu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kqu",
  })
  @post("{id}")
  static createKqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
