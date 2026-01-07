import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icj")
export default class IcjController {
  @operation({
    summary: "Get Icj",
  })
  @get()
  static getIcj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icj",
  })
  @post("{id}")
  static createIcj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
