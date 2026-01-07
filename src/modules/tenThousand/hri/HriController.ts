import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hri")
export default class HriController {
  @operation({
    summary: "Get Hri",
  })
  @get()
  static getHri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hri",
  })
  @post("{id}")
  static createHri = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
