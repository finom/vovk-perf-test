import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtc")
export default class GtcController {
  @operation({
    summary: "Get Gtc",
  })
  @get()
  static getGtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtc",
  })
  @post("{id}")
  static createGtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
