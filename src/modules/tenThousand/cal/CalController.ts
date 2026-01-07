import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cal")
export default class CalController {
  @operation({
    summary: "Get Cal",
  })
  @get()
  static getCal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cal",
  })
  @post("{id}")
  static createCal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
