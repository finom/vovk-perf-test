import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivp")
export default class IvpController {
  @operation({
    summary: "Get Ivp",
  })
  @get()
  static getIvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivp",
  })
  @post("{id}")
  static createIvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
