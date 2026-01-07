import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afs")
export default class AfsController {
  @operation({
    summary: "Get Afs",
  })
  @get()
  static getAfs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afs",
  })
  @post("{id}")
  static createAfs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
