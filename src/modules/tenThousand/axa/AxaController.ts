import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axa")
export default class AxaController {
  @operation({
    summary: "Get Axa",
  })
  @get()
  static getAxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Axa",
  })
  @post("{id}")
  static createAxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
