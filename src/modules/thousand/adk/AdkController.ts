import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adk")
export default class AdkController {
  @operation({
    summary: "Get Adk",
  })
  @get()
  static getAdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adk",
  })
  @post("{id}")
  static createAdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
