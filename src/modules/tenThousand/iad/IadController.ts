import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iad")
export default class IadController {
  @operation({
    summary: "Get Iad",
  })
  @get()
  static getIad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iad",
  })
  @post("{id}")
  static createIad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
