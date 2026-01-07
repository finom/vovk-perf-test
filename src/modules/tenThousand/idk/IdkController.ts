import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idk")
export default class IdkController {
  @operation({
    summary: "Get Idk",
  })
  @get()
  static getIdk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idk",
  })
  @post("{id}")
  static createIdk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
