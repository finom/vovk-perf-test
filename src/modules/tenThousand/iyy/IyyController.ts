import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyy")
export default class IyyController {
  @operation({
    summary: "Get Iyy",
  })
  @get()
  static getIyy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyy",
  })
  @post("{id}")
  static createIyy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
