import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwb")
export default class IwbController {
  @operation({
    summary: "Get Iwb",
  })
  @get()
  static getIwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwb",
  })
  @post("{id}")
  static createIwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
