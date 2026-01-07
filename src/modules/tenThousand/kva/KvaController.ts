import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kva")
export default class KvaController {
  @operation({
    summary: "Get Kva",
  })
  @get()
  static getKva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kva",
  })
  @post("{id}")
  static createKva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
