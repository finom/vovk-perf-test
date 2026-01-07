import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgu")
export default class FguController {
  @operation({
    summary: "Get Fgu",
  })
  @get()
  static getFgu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgu",
  })
  @post("{id}")
  static createFgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
