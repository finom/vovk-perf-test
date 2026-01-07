import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwb")
export default class IwbController {
  @operation({
    summary: "Get Iwb",
  })
  @get()
  static getIwb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwb",
  })
  @post("{id}")
  static createIwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
