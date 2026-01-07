import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwr")
export default class HwrController {
  @operation({
    summary: "Get Hwr",
  })
  @get()
  static getHwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwr",
  })
  @post("{id}")
  static createHwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
