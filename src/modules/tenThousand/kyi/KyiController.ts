import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyi")
export default class KyiController {
  @operation({
    summary: "Get Kyi",
  })
  @get()
  static getKyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyi",
  })
  @post("{id}")
  static createKyi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
