import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilh")
export default class IlhController {
  @operation({
    summary: "Get Ilh",
  })
  @get()
  static getIlh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilh",
  })
  @post("{id}")
  static createIlh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
