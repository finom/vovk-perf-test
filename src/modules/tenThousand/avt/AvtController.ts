import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avt")
export default class AvtController {
  @operation({
    summary: "Get Avt",
  })
  @get()
  static getAvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avt",
  })
  @post("{id}")
  static createAvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
