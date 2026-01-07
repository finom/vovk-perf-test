import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hje")
export default class HjeController {
  @operation({
    summary: "Get Hje",
  })
  @get()
  static getHje = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hje",
  })
  @post("{id}")
  static createHje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
