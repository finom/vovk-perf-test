import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxc")
export default class KxcController {
  @operation({
    summary: "Get Kxc",
  })
  @get()
  static getKxc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxc",
  })
  @post("{id}")
  static createKxc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
