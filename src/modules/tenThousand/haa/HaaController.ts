import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haa")
export default class HaaController {
  @operation({
    summary: "Get Haa",
  })
  @get()
  static getHaa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Haa",
  })
  @post("{id}")
  static createHaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
