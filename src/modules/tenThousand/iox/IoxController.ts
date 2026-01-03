import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioxen")
export default class IoxController {
  @operation({
    summary: "Get Ioxen",
  })
  @get()
  static getIoxen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iox",
  })
  @post("{id}")
  static createIox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
