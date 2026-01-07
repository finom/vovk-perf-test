import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gey")
export default class GeyController {
  @operation({
    summary: "Get Gey",
  })
  @get()
  static getGey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gey",
  })
  @post("{id}")
  static createGey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
