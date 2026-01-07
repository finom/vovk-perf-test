import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaz")
export default class AazController {
  @operation({
    summary: "Get Aaz",
  })
  @get()
  static getAaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aaz",
  })
  @post("{id}")
  static createAaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
