import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hre")
export default class HreController {
  @operation({
    summary: "Get Hre",
  })
  @get()
  static getHre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hre",
  })
  @post("{id}")
  static createHre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
