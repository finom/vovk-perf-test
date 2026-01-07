import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpu")
export default class MpuController {
  @operation({
    summary: "Get Mpu",
  })
  @get()
  static getMpu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpu",
  })
  @post("{id}")
  static createMpu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
