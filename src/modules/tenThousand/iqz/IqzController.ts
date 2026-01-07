import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqz")
export default class IqzController {
  @operation({
    summary: "Get Iqz",
  })
  @get()
  static getIqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqz",
  })
  @post("{id}")
  static createIqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
