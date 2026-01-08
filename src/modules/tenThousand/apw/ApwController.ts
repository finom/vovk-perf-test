import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apw")
export default class ApwController {
  @operation({
    summary: "Get Apw",
  })
  @get()
  static getApw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apw",
  })
  @post("{id}")
  static createApw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
