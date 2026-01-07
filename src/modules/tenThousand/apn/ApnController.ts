import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apn")
export default class ApnController {
  @operation({
    summary: "Get Apn",
  })
  @get()
  static getApn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apn",
  })
  @post("{id}")
  static createApn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
