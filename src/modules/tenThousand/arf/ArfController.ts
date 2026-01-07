import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arf")
export default class ArfController {
  @operation({
    summary: "Get Arf",
  })
  @get()
  static getArf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arf",
  })
  @post("{id}")
  static createArf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
