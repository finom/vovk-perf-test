import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwp")
export default class KwpController {
  @operation({
    summary: "Get Kwp",
  })
  @get()
  static getKwp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwp",
  })
  @post("{id}")
  static createKwp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
