import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwr")
export default class DwrController {
  @operation({
    summary: "Get Dwr",
  })
  @get()
  static getDwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dwr",
  })
  @post("{id}")
  static createDwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
