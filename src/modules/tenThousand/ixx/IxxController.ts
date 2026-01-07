import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixx")
export default class IxxController {
  @operation({
    summary: "Get Ixx",
  })
  @get()
  static getIxx = procedure({
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
