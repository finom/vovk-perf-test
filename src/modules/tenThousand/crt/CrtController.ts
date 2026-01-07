import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crt")
export default class CrtController {
  @operation({
    summary: "Get Crt",
  })
  @get()
  static getCrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crt",
  })
  @post("{id}")
  static createCrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
