import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hib")
export default class HibController {
  @operation({
    summary: "Get Hib",
  })
  @get()
  static getHib = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hib",
  })
  @post("{id}")
  static createHib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
