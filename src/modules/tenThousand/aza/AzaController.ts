import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aza")
export default class AzaController {
  @operation({
    summary: "Get Aza",
  })
  @get()
  static getAza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aza",
  })
  @post("{id}")
  static createAza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
