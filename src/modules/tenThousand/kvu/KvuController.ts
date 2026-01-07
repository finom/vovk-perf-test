import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvu")
export default class KvuController {
  @operation({
    summary: "Get Kvu",
  })
  @get()
  static getKvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kvu",
  })
  @post("{id}")
  static createKvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
