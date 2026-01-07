import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eig")
export default class EigController {
  @operation({
    summary: "Get Eig",
  })
  @get()
  static getEig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eig",
  })
  @post("{id}")
  static createEig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
