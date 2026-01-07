import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jck")
export default class JckController {
  @operation({
    summary: "Get Jck",
  })
  @get()
  static getJck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jck",
  })
  @post("{id}")
  static createJck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
