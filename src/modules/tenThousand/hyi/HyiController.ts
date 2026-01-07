import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyi")
export default class HyiController {
  @operation({
    summary: "Get Hyi",
  })
  @get()
  static getHyi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyi",
  })
  @post("{id}")
  static createHyi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
