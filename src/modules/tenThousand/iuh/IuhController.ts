import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuh")
export default class IuhController {
  @operation({
    summary: "Get Iuh",
  })
  @get()
  static getIuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuh",
  })
  @post("{id}")
  static createIuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
