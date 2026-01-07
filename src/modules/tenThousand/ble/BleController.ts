import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ble")
export default class BleController {
  @operation({
    summary: "Get Ble",
  })
  @get()
  static getBle = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ble",
  })
  @post("{id}")
  static createBle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
