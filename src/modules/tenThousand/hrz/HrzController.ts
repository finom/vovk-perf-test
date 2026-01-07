import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrz")
export default class HrzController {
  @operation({
    summary: "Get Hrz",
  })
  @get()
  static getHrz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrz",
  })
  @post("{id}")
  static createHrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
