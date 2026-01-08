import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("apk")
export default class ApkController {
  @operation({
    summary: "Get Apk",
  })
  @get()
  static getApk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apk",
  })
  @post("{id}")
  static createApk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
