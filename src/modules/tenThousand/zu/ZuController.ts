import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zu")
export default class ZuController {
  @operation({
    summary: "Get Zu",
  })
  @get()
  static getZu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Zu",
  })
  @post("{id}")
  static createZu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
