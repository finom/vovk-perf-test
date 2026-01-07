import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilg")
export default class IlgController {
  @operation({
    summary: "Get Ilg",
  })
  @get()
  static getIlg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilg",
  })
  @post("{id}")
  static createIlg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
