import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exg")
export default class ExgController {
  @operation({
    summary: "Get Exg",
  })
  @get()
  static getExg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exg",
  })
  @post("{id}")
  static createExg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
