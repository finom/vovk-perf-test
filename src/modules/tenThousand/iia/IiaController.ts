import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iia")
export default class IiaController {
  @operation({
    summary: "Get Iia",
  })
  @get()
  static getIia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iia",
  })
  @post("{id}")
  static createIia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
