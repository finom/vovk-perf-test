import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyy")
export default class IyyController {
  @operation({
    summary: "Get Iyy",
  })
  @get()
  static getIyy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyy",
  })
  @post("{id}")
  static createIyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
