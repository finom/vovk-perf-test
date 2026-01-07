import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioz")
export default class IozController {
  @operation({
    summary: "Get Ioz",
  })
  @get()
  static getIoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ioz",
  })
  @post("{id}")
  static createIoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
