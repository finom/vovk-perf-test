import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieq")
export default class IeqController {
  @operation({
    summary: "Get Ieq",
  })
  @get()
  static getIeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ieq",
  })
  @post("{id}")
  static createIeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
