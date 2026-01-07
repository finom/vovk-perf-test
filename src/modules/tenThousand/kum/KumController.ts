import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kum")
export default class KumController {
  @operation({
    summary: "Get Kum",
  })
  @get()
  static getKum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kum",
  })
  @post("{id}")
  static createKum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
