import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gil")
export default class GilController {
  @operation({
    summary: "Get Gil",
  })
  @get()
  static getGil = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gil",
  })
  @post("{id}")
  static createGil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
