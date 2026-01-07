import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kob")
export default class KobController {
  @operation({
    summary: "Get Kob",
  })
  @get()
  static getKob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kob",
  })
  @post("{id}")
  static createKob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
