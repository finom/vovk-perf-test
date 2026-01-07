import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mby")
export default class MbyController {
  @operation({
    summary: "Get Mby",
  })
  @get()
  static getMby = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mby",
  })
  @post("{id}")
  static createMby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
