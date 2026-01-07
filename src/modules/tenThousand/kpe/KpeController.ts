import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpe")
export default class KpeController {
  @operation({
    summary: "Get Kpe",
  })
  @get()
  static getKpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpe",
  })
  @post("{id}")
  static createKpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
