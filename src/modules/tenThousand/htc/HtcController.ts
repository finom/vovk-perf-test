import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htc")
export default class HtcController {
  @operation({
    summary: "Get Htc",
  })
  @get()
  static getHtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htc",
  })
  @post("{id}")
  static createHtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
