import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdo")
export default class MdoController {
  @operation({
    summary: "Get Mdo",
  })
  @get()
  static getMdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdo",
  })
  @post("{id}")
  static createMdo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
