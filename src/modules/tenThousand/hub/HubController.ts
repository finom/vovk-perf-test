import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hub")
export default class HubController {
  @operation({
    summary: "Get Hub",
  })
  @get()
  static getHub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hub",
  })
  @post("{id}")
  static createHub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
