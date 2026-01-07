import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejz")
export default class EjzController {
  @operation({
    summary: "Get Ejz",
  })
  @get()
  static getEjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejz",
  })
  @post("{id}")
  static createEjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
