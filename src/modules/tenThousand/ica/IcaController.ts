import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ica")
export default class IcaController {
  @operation({
    summary: "Get Ica",
  })
  @get()
  static getIca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ica",
  })
  @post("{id}")
  static createIca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
