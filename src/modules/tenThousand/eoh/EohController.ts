import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoh")
export default class EohController {
  @operation({
    summary: "Get Eoh",
  })
  @get()
  static getEoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoh",
  })
  @post("{id}")
  static createEoh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
