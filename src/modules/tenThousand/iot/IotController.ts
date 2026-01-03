import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iots")
export default class IotController {
  @operation({
    summary: "Get Iots",
  })
  @get()
  static getIots = procedure({
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
