import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejb")
export default class EjbController {
  @operation({
    summary: "Get Ejb",
  })
  @get()
  static getEjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejb",
  })
  @post("{id}")
  static createEjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
