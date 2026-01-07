import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwf")
export default class IwfController {
  @operation({
    summary: "Get Iwf",
  })
  @get()
  static getIwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwf",
  })
  @post("{id}")
  static createIwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
