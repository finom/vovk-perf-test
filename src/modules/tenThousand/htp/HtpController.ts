import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htp")
export default class HtpController {
  @operation({
    summary: "Get Htp",
  })
  @get()
  static getHtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htp",
  })
  @post("{id}")
  static createHtp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
