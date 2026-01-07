import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ier")
export default class IerController {
  @operation({
    summary: "Get Ier",
  })
  @get()
  static getIer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ier",
  })
  @post("{id}")
  static createIer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
