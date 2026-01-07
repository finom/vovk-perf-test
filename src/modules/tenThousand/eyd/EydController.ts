import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyd")
export default class EydController {
  @operation({
    summary: "Get Eyd",
  })
  @get()
  static getEyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyd",
  })
  @post("{id}")
  static createEyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
