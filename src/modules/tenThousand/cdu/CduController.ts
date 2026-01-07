import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdu")
export default class CduController {
  @operation({
    summary: "Get Cdu",
  })
  @get()
  static getCdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cdu",
  })
  @post("{id}")
  static createCdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
