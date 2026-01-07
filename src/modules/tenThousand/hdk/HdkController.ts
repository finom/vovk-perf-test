import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdk")
export default class HdkController {
  @operation({
    summary: "Get Hdk",
  })
  @get()
  static getHdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdk",
  })
  @post("{id}")
  static createHdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
