import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ict")
export default class IctController {
  @operation({
    summary: "Get Ict",
  })
  @get()
  static getIct = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ict",
  })
  @post("{id}")
  static createIct = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
