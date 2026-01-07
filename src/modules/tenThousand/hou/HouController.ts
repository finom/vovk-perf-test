import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hou")
export default class HouController {
  @operation({
    summary: "Get Hou",
  })
  @get()
  static getHou = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hou",
  })
  @post("{id}")
  static createHou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
