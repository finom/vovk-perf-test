import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyus")
export default class EyuController {
  @operation({
    summary: "Get Eyus",
  })
  @get()
  static getEyus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyu",
  })
  @post("{id}")
  static createEyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
