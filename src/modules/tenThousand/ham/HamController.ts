import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hams")
export default class HamController {
  @operation({
    summary: "Get Hams",
  })
  @get()
  static getHams = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ham",
  })
  @post("{id}")
  static createHam = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
