import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibo")
export default class IboController {
  @operation({
    summary: "Get Ibo",
  })
  @get()
  static getIbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibo",
  })
  @post("{id}")
  static createIbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
