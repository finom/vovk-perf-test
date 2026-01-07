import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldu")
export default class LduController {
  @operation({
    summary: "Get Ldu",
  })
  @get()
  static getLdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldu",
  })
  @post("{id}")
  static createLdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
