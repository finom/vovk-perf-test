import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyu")
export default class GyuController {
  @operation({
    summary: "Get Gyu",
  })
  @get()
  static getGyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyu",
  })
  @post("{id}")
  static createGyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
