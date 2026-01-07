import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hla")
export default class HlaController {
  @operation({
    summary: "Get Hla",
  })
  @get()
  static getHla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hla",
  })
  @post("{id}")
  static createHla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
