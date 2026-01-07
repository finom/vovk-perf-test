import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejl")
export default class EjlController {
  @operation({
    summary: "Get Ejl",
  })
  @get()
  static getEjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejl",
  })
  @post("{id}")
  static createEjl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
