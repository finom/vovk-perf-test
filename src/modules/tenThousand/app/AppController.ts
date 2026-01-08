import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("app")
export default class AppController {
  @operation({
    summary: "Get App",
  })
  @get()
  static getApp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create App",
  })
  @post("{id}")
  static createApp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
