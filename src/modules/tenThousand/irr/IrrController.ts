import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irr")
export default class IrrController {
  @operation({
    summary: "Get Irr",
  })
  @get()
  static getIrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irr",
  })
  @post("{id}")
  static createIrr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
