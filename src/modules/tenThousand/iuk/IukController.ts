import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuk")
export default class IukController {
  @operation({
    summary: "Get Iuk",
  })
  @get()
  static getIuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iuk",
  })
  @post("{id}")
  static createIuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
