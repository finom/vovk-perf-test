import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddu")
export default class DduController {
  @operation({
    summary: "Get Ddu",
  })
  @get()
  static getDdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddu",
  })
  @post("{id}")
  static createDdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
