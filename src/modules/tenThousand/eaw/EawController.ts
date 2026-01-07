import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaw")
export default class EawController {
  @operation({
    summary: "Get Eaw",
  })
  @get()
  static getEaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eaw",
  })
  @post("{id}")
  static createEaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
