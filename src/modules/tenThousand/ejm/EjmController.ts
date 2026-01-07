import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejm")
export default class EjmController {
  @operation({
    summary: "Get Ejm",
  })
  @get()
  static getEjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejm",
  })
  @post("{id}")
  static createEjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
