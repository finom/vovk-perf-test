import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivps")
export default class IvpController {
  @operation({
    summary: "Get Ivps",
  })
  @get()
  static getIvps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ivp",
  })
  @post("{id}")
  static createIvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
