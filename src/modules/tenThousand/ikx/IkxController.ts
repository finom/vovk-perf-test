import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikx")
export default class IkxController {
  @operation({
    summary: "Get Ikx",
  })
  @get()
  static getIkx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikx",
  })
  @post("{id}")
  static createIkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
