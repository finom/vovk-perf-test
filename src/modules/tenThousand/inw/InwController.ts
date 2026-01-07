import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inw")
export default class InwController {
  @operation({
    summary: "Get Inw",
  })
  @get()
  static getInw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inw",
  })
  @post("{id}")
  static createInw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
