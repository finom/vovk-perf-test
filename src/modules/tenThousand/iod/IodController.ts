import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iod")
export default class IodController {
  @operation({
    summary: "Get Iod",
  })
  @get()
  static getIod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iod",
  })
  @post("{id}")
  static createIod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
