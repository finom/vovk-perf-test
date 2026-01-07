import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hr")
export default class HrController {
  @operation({
    summary: "Get Hr",
  })
  @get()
  static getHr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hr",
  })
  @post("{id}")
  static createHr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
