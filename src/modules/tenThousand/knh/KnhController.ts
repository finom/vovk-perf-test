import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knh")
export default class KnhController {
  @operation({
    summary: "Get Knh",
  })
  @get()
  static getKnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knh",
  })
  @post("{id}")
  static createKnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
