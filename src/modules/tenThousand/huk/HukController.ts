import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huk")
export default class HukController {
  @operation({
    summary: "Get Huk",
  })
  @get()
  static getHuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huk",
  })
  @post("{id}")
  static createHuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
