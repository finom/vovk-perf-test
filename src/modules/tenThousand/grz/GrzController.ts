import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grz")
export default class GrzController {
  @operation({
    summary: "Get Grz",
  })
  @get()
  static getGrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Grz",
  })
  @post("{id}")
  static createGrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
