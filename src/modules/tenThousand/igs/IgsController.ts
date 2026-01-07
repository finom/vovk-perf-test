import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igs")
export default class IgsController {
  @operation({
    summary: "Get Igs",
  })
  @get()
  static getIgs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igs",
  })
  @post("{id}")
  static createIgs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
