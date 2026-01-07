import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iic")
export default class IicController {
  @operation({
    summary: "Get Iic",
  })
  @get()
  static getIic = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iic",
  })
  @post("{id}")
  static createIic = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
