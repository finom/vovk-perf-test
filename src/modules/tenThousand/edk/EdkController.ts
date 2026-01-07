import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edk")
export default class EdkController {
  @operation({
    summary: "Get Edk",
  })
  @get()
  static getEdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edk",
  })
  @post("{id}")
  static createEdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
