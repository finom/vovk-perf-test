import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atk")
export default class AtkController {
  @operation({
    summary: "Get Atk",
  })
  @get()
  static getAtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atk",
  })
  @post("{id}")
  static createAtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
