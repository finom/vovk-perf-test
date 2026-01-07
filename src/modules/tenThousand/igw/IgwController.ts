import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igw")
export default class IgwController {
  @operation({
    summary: "Get Igw",
  })
  @get()
  static getIgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igw",
  })
  @post("{id}")
  static createIgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
