import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agu")
export default class AguController {
  @operation({
    summary: "Get Agu",
  })
  @get()
  static getAgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agu",
  })
  @post("{id}")
  static createAgu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
