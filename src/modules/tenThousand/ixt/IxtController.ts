import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixt")
export default class IxtController {
  @operation({
    summary: "Get Ixt",
  })
  @get()
  static getIxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixt",
  })
  @post("{id}")
  static createIxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
