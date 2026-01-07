import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agw")
export default class AgwController {
  @operation({
    summary: "Get Agw",
  })
  @get()
  static getAgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agw",
  })
  @post("{id}")
  static createAgw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
