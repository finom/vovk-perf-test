import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbu")
export default class CbuController {
  @operation({
    summary: "Get Cbu",
  })
  @get()
  static getCbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbu",
  })
  @post("{id}")
  static createCbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
