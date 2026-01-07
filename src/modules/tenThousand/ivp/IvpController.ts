import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ivp")
export default class IvpController {
  @operation({
    summary: "Get Ivp",
  })
  @get()
  static getIvp = procedure({
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
