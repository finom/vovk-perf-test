import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaz")
export default class KazController {
  @operation({
    summary: "Get Kaz",
  })
  @get()
  static getKaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaz",
  })
  @post("{id}")
  static createKaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
