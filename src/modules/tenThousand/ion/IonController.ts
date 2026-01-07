import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ion")
export default class IonController {
  @operation({
    summary: "Get Ion",
  })
  @get()
  static getIon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ion",
  })
  @post("{id}")
  static createIon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
