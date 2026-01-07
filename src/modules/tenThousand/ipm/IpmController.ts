import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipm")
export default class IpmController {
  @operation({
    summary: "Get Ipm",
  })
  @get()
  static getIpm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ipm",
  })
  @post("{id}")
  static createIpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
