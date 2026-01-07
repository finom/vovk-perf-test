import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avd")
export default class AvdController {
  @operation({
    summary: "Get Avd",
  })
  @get()
  static getAvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avd",
  })
  @post("{id}")
  static createAvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
