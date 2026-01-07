import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fed")
export default class FedController {
  @operation({
    summary: "Get Fed",
  })
  @get()
  static getFed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fed",
  })
  @post("{id}")
  static createFed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
