import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xa")
export default class XaController {
  @operation({
    summary: "Get Xa",
  })
  @get()
  static getXa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Xa",
  })
  @post("{id}")
  static createXa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
