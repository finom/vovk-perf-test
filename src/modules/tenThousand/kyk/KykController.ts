import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyk")
export default class KykController {
  @operation({
    summary: "Get Kyk",
  })
  @get()
  static getKyk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyk",
  })
  @post("{id}")
  static createKyk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
