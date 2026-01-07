import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvd")
export default class KvdController {
  @operation({
    summary: "Get Kvd",
  })
  @get()
  static getKvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvd",
  })
  @post("{id}")
  static createKvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
