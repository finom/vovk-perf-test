import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwc")
export default class KwcController {
  @operation({
    summary: "Get Kwc",
  })
  @get()
  static getKwc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwc",
  })
  @post("{id}")
  static createKwc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
