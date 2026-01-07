import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejw")
export default class EjwController {
  @operation({
    summary: "Get Ejw",
  })
  @get()
  static getEjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejw",
  })
  @post("{id}")
  static createEjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
