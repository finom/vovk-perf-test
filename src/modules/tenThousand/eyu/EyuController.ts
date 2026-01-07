import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyu")
export default class EyuController {
  @operation({
    summary: "Get Eyu",
  })
  @get()
  static getEyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyu",
  })
  @post("{id}")
  static createEyu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
