import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aro")
export default class AroController {
  @operation({
    summary: "Get Aro",
  })
  @get()
  static getAro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aro",
  })
  @post("{id}")
  static createAro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
