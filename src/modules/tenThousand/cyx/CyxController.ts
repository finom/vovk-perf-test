import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyx")
export default class CyxController {
  @operation({
    summary: "Get Cyx",
  })
  @get()
  static getCyx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyx",
  })
  @post("{id}")
  static createCyx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
