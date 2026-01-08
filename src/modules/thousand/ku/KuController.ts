import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ku")
export default class KuController {
  @operation({
    summary: "Get Ku",
  })
  @get()
  static getKu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ku",
  })
  @post("{id}")
  static createKu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
