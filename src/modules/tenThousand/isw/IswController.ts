import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isw")
export default class IswController {
  @operation({
    summary: "Get Isw",
  })
  @get()
  static getIsw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isw",
  })
  @post("{id}")
  static createIsw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
