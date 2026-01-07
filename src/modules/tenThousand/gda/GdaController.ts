import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gda")
export default class GdaController {
  @operation({
    summary: "Get Gda",
  })
  @get()
  static getGda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gda",
  })
  @post("{id}")
  static createGda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
