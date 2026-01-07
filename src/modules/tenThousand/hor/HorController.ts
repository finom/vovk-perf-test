import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hor")
export default class HorController {
  @operation({
    summary: "Get Hor",
  })
  @get()
  static getHor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hor",
  })
  @post("{id}")
  static createHor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
