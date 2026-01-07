import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kx")
export default class KxController {
  @operation({
    summary: "Get Kx",
  })
  @get()
  static getKx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kx",
  })
  @post("{id}")
  static createKx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
