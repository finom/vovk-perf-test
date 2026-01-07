import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgy")
export default class HgyController {
  @operation({
    summary: "Get Hgy",
  })
  @get()
  static getHgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgy",
  })
  @post("{id}")
  static createHgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
