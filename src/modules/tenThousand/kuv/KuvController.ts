import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuv")
export default class KuvController {
  @operation({
    summary: "Get Kuv",
  })
  @get()
  static getKuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuv",
  })
  @post("{id}")
  static createKuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
