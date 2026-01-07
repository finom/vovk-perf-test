import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuy")
export default class KuyController {
  @operation({
    summary: "Get Kuy",
  })
  @get()
  static getKuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuy",
  })
  @post("{id}")
  static createKuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
