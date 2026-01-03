import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgs")
export default class HgsController {
  @operation({
    summary: "Get Hgs",
  })
  @get()
  static getHgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgs",
  })
  @post("{id}")
  static createHgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
