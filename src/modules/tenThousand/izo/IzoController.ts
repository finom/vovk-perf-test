import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izo")
export default class IzoController {
  @operation({
    summary: "Get Izo",
  })
  @get()
  static getIzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Izo",
  })
  @post("{id}")
  static createIzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
