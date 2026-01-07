import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibx")
export default class IbxController {
  @operation({
    summary: "Get Ibx",
  })
  @get()
  static getIbx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibx",
  })
  @post("{id}")
  static createIbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
