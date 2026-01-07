import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyz")
export default class IyzController {
  @operation({
    summary: "Get Iyz",
  })
  @get()
  static getIyz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyz",
  })
  @post("{id}")
  static createIyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
