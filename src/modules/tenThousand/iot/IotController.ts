import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iot")
export default class IotController {
  @operation({
    summary: "Get Iot",
  })
  @get()
  static getIot = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iot",
  })
  @post("{id}")
  static createIot = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
