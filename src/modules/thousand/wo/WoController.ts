import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wo")
export default class WoController {
  @operation({
    summary: "Get Wo",
  })
  @get()
  static getWo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wo",
  })
  @post("{id}")
  static createWo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
