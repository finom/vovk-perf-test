import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtu")
export default class GtuController {
  @operation({
    summary: "Get Gtu",
  })
  @get()
  static getGtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtu",
  })
  @post("{id}")
  static createGtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
