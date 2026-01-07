import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igz")
export default class IgzController {
  @operation({
    summary: "Get Igz",
  })
  @get()
  static getIgz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igz",
  })
  @post("{id}")
  static createIgz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
