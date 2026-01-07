import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaw")
export default class IawController {
  @operation({
    summary: "Get Iaw",
  })
  @get()
  static getIaw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iaw",
  })
  @post("{id}")
  static createIaw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
