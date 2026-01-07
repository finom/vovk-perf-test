import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jih")
export default class JihController {
  @operation({
    summary: "Get Jih",
  })
  @get()
  static getJih = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jih",
  })
  @post("{id}")
  static createJih = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
