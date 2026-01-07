import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efl")
export default class EflController {
  @operation({
    summary: "Get Efl",
  })
  @get()
  static getEfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efl",
  })
  @post("{id}")
  static createEfl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
