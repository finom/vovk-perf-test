import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hij")
export default class HijController {
  @operation({
    summary: "Get Hij",
  })
  @get()
  static getHij = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hij",
  })
  @post("{id}")
  static createHij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
