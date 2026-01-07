import { procedure, prefix, get, post, operation } from "vovk";

@prefix("me")
export default class MeController {
  @operation({
    summary: "Get Me",
  })
  @get()
  static getMe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Me",
  })
  @post("{id}")
  static createMe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
