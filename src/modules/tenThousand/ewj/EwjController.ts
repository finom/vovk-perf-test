import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewj")
export default class EwjController {
  @operation({
    summary: "Get Ewj",
  })
  @get()
  static getEwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewj",
  })
  @post("{id}")
  static createEwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
