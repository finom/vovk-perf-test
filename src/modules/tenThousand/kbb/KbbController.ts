import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbb")
export default class KbbController {
  @operation({
    summary: "Get Kbb",
  })
  @get()
  static getKbb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbb",
  })
  @post("{id}")
  static createKbb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
