import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apx")
export default class ApxController {
  @operation({
    summary: "Get Apx",
  })
  @get()
  static getApx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apx",
  })
  @post("{id}")
  static createApx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
