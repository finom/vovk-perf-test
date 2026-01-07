import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iam")
export default class IamController {
  @operation({
    summary: "Get Iam",
  })
  @get()
  static getIam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iam",
  })
  @post("{id}")
  static createIam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
