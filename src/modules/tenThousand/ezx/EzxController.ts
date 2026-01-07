import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezx")
export default class EzxController {
  @operation({
    summary: "Get Ezx",
  })
  @get()
  static getEzx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezx",
  })
  @post("{id}")
  static createEzx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
