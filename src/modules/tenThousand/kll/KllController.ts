import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kll")
export default class KllController {
  @operation({
    summary: "Get Kll",
  })
  @get()
  static getKll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kll",
  })
  @post("{id}")
  static createKll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
