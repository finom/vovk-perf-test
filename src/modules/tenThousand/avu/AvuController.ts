import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avu")
export default class AvuController {
  @operation({
    summary: "Get Avu",
  })
  @get()
  static getAvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avu",
  })
  @post("{id}")
  static createAvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
