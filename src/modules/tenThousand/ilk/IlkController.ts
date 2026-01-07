import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilk")
export default class IlkController {
  @operation({
    summary: "Get Ilk",
  })
  @get()
  static getIlk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilk",
  })
  @post("{id}")
  static createIlk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
