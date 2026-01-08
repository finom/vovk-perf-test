import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuq")
export default class KuqController {
  @operation({
    summary: "Get Kuq",
  })
  @get()
  static getKuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuq",
  })
  @post("{id}")
  static createKuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
