import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbn")
export default class FbnController {
  @operation({
    summary: "Get Fbn",
  })
  @get()
  static getFbn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fbn",
  })
  @post("{id}")
  static createFbn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
