import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuk")
export default class CukController {
  @operation({
    summary: "Get Cuk",
  })
  @get()
  static getCuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuk",
  })
  @post("{id}")
  static createCuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
