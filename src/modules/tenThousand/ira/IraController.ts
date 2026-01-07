import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ira")
export default class IraController {
  @operation({
    summary: "Get Ira",
  })
  @get()
  static getIra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ira",
  })
  @post("{id}")
  static createIra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
