import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilf")
export default class IlfController {
  @operation({
    summary: "Get Ilf",
  })
  @get()
  static getIlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilf",
  })
  @post("{id}")
  static createIlf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
