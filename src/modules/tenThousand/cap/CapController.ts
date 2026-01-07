import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cap")
export default class CapController {
  @operation({
    summary: "Get Cap",
  })
  @get()
  static getCap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cap",
  })
  @post("{id}")
  static createCap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
