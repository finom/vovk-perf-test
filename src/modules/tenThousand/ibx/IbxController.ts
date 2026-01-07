import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibx")
export default class IbxController {
  @operation({
    summary: "Get Ibx",
  })
  @get()
  static getIbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibx",
  })
  @post("{id}")
  static createIbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
