import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoxen")
export default class HoxController {
  @operation({
    summary: "Get Hoxen",
  })
  @get()
  static getHoxen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hox",
  })
  @post("{id}")
  static createHox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
