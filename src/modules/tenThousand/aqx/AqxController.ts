import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqxes")
export default class AqxController {
  @operation({
    summary: "Get Aqxes",
  })
  @get()
  static getAqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqx",
  })
  @post("{id}")
  static createAqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
