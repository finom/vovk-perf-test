import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwh")
export default class IwhController {
  @operation({
    summary: "Get Iwh",
  })
  @get()
  static getIwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwh",
  })
  @post("{id}")
  static createIwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
