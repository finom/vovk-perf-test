import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ceh")
export default class CehController {
  @operation({
    summary: "Get Ceh",
  })
  @get()
  static getCeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ceh",
  })
  @post("{id}")
  static createCeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
