import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dez")
export default class DezController {
  @operation({
    summary: "Get Dez",
  })
  @get()
  static getDez = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dez",
  })
  @post("{id}")
  static createDez = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
