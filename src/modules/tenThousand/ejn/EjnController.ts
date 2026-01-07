import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejn")
export default class EjnController {
  @operation({
    summary: "Get Ejn",
  })
  @get()
  static getEjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejn",
  })
  @post("{id}")
  static createEjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
