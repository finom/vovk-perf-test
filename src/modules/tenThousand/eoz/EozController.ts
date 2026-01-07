import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoz")
export default class EozController {
  @operation({
    summary: "Get Eoz",
  })
  @get()
  static getEoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eoz",
  })
  @post("{id}")
  static createEoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
