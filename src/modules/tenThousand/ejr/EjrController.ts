import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejr")
export default class EjrController {
  @operation({
    summary: "Get Ejr",
  })
  @get()
  static getEjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejr",
  })
  @post("{id}")
  static createEjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
