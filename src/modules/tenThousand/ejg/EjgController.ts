import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejg")
export default class EjgController {
  @operation({
    summary: "Get Ejg",
  })
  @get()
  static getEjg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejg",
  })
  @post("{id}")
  static createEjg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
