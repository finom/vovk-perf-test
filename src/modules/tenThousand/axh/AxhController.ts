import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axhs")
export default class AxhController {
  @operation({
    summary: "Get Axhs",
  })
  @get()
  static getAxhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axh",
  })
  @post("{id}")
  static createAxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
