import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ble")
export default class BleController {
  @operation({
    summary: "Get Ble",
  })
  @get()
  static getBle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ble",
  })
  @post("{id}")
  static createBle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
