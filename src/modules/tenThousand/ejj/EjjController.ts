import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejj")
export default class EjjController {
  @operation({
    summary: "Get Ejj",
  })
  @get()
  static getEjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejj",
  })
  @post("{id}")
  static createEjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
