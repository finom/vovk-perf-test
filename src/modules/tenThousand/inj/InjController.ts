import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inj")
export default class InjController {
  @operation({
    summary: "Get Inj",
  })
  @get()
  static getInj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inj",
  })
  @post("{id}")
  static createInj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
