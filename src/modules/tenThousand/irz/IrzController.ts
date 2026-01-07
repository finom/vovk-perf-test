import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irz")
export default class IrzController {
  @operation({
    summary: "Get Irz",
  })
  @get()
  static getIrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irz",
  })
  @post("{id}")
  static createIrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
