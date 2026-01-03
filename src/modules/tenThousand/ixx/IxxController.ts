import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixxes")
export default class IxxController {
  @operation({
    summary: "Get Ixxes",
  })
  @get()
  static getIxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixx",
  })
  @post("{id}")
  static createIxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
