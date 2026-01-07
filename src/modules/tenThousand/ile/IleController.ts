import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ile")
export default class IleController {
  @operation({
    summary: "Get Ile",
  })
  @get()
  static getIle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ile",
  })
  @post("{id}")
  static createIle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
