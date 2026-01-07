import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fda")
export default class FdaController {
  @operation({
    summary: "Get Fda",
  })
  @get()
  static getFda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fda",
  })
  @post("{id}")
  static createFda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
