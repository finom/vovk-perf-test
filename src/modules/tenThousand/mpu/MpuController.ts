import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpus")
export default class MpuController {
  @operation({
    summary: "Get Mpus",
  })
  @get()
  static getMpus = procedure({
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
