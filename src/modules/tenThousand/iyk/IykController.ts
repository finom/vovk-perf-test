import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyk")
export default class IykController {
  @operation({
    summary: "Get Iyk",
  })
  @get()
  static getIyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyk",
  })
  @post("{id}")
  static createIyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
