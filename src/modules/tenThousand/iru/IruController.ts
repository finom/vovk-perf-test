import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iru")
export default class IruController {
  @operation({
    summary: "Get Iru",
  })
  @get()
  static getIru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iru",
  })
  @post("{id}")
  static createIru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
