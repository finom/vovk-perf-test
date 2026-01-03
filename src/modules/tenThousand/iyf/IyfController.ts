import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyfs")
export default class IyfController {
  @operation({
    summary: "Get Iyfs",
  })
  @get()
  static getIyfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyf",
  })
  @post("{id}")
  static createIyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
