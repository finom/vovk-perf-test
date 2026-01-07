import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwr")
export default class IwrController {
  @operation({
    summary: "Get Iwr",
  })
  @get()
  static getIwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwr",
  })
  @post("{id}")
  static createIwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
