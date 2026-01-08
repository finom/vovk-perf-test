import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kwa")
export default class KwaController {
  @operation({
    summary: "Get Kwa",
  })
  @get()
  static getKwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwa",
  })
  @post("{id}")
  static createKwa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
