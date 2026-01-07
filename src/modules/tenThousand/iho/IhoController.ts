import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iho")
export default class IhoController {
  @operation({
    summary: "Get Iho",
  })
  @get()
  static getIho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iho",
  })
  @post("{id}")
  static createIho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
