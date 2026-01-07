import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvu")
export default class HvuController {
  @operation({
    summary: "Get Hvu",
  })
  @get()
  static getHvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvu",
  })
  @post("{id}")
  static createHvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
