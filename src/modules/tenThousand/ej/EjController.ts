import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ej")
export default class EjController {
  @operation({
    summary: "Get Ej",
  })
  @get()
  static getEj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ej",
  })
  @post("{id}")
  static createEj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
