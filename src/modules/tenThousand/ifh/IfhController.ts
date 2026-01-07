import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifh")
export default class IfhController {
  @operation({
    summary: "Get Ifh",
  })
  @get()
  static getIfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifh",
  })
  @post("{id}")
  static createIfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
