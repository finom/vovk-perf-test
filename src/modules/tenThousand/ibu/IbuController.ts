import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibu")
export default class IbuController {
  @operation({
    summary: "Get Ibu",
  })
  @get()
  static getIbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibu",
  })
  @post("{id}")
  static createIbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
