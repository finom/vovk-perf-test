import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eat")
export default class EatController {
  @operation({
    summary: "Get Eat",
  })
  @get()
  static getEat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eat",
  })
  @post("{id}")
  static createEat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
