import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvp")
export default class HvpController {
  @operation({
    summary: "Get Hvp",
  })
  @get()
  static getHvp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvp",
  })
  @post("{id}")
  static createHvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
