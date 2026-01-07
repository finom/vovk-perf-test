import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyz")
export default class KyzController {
  @operation({
    summary: "Get Kyz",
  })
  @get()
  static getKyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyz",
  })
  @post("{id}")
  static createKyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
