import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egg")
export default class EggController {
  @operation({
    summary: "Get Egg",
  })
  @get()
  static getEgg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egg",
  })
  @post("{id}")
  static createEgg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
