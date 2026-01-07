import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hou")
export default class HouController {
  @operation({
    summary: "Get Hou",
  })
  @get()
  static getHou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hou",
  })
  @post("{id}")
  static createHou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
