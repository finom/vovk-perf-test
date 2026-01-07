import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iya")
export default class IyaController {
  @operation({
    summary: "Get Iya",
  })
  @get()
  static getIya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iya",
  })
  @post("{id}")
  static createIya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
