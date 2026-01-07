import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekf")
export default class EkfController {
  @operation({
    summary: "Get Ekf",
  })
  @get()
  static getEkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekf",
  })
  @post("{id}")
  static createEkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
