import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hij")
export default class HijController {
  @operation({
    summary: "Get Hij",
  })
  @get()
  static getHij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hij",
  })
  @post("{id}")
  static createHij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
