import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izy")
export default class IzyController {
  @operation({
    summary: "Get Izy",
  })
  @get()
  static getIzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izy",
  })
  @post("{id}")
  static createIzy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
