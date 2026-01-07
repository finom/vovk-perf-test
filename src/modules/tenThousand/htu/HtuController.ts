import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htu")
export default class HtuController {
  @operation({
    summary: "Get Htu",
  })
  @get()
  static getHtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Htu",
  })
  @post("{id}")
  static createHtu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
