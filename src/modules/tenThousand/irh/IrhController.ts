import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irh")
export default class IrhController {
  @operation({
    summary: "Get Irh",
  })
  @get()
  static getIrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irh",
  })
  @post("{id}")
  static createIrh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
