import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huis")
export default class HuiController {
  @operation({
    summary: "Get Huis",
  })
  @get()
  static getHuis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hui",
  })
  @post("{id}")
  static createHui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
