import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imus")
export default class ImuController {
  @operation({
    summary: "Get Imus",
  })
  @get()
  static getImus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imu",
  })
  @post("{id}")
  static createImu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
