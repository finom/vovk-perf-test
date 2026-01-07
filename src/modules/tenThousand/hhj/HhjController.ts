import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhj")
export default class HhjController {
  @operation({
    summary: "Get Hhj",
  })
  @get()
  static getHhj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hhj",
  })
  @post("{id}")
  static createHhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
