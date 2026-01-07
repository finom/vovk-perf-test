import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jet")
export default class JetController {
  @operation({
    summary: "Get Jet",
  })
  @get()
  static getJet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jet",
  })
  @post("{id}")
  static createJet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
