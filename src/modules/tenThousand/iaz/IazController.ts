import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaz")
export default class IazController {
  @operation({
    summary: "Get Iaz",
  })
  @get()
  static getIaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iaz",
  })
  @post("{id}")
  static createIaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
