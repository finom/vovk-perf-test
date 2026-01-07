import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxe")
export default class KxeController {
  @operation({
    summary: "Get Kxe",
  })
  @get()
  static getKxe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxe",
  })
  @post("{id}")
  static createKxe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
