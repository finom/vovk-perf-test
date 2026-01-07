import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isi")
export default class IsiController {
  @operation({
    summary: "Get Isi",
  })
  @get()
  static getIsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Isi",
  })
  @post("{id}")
  static createIsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
