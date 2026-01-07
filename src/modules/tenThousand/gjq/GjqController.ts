import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gjq")
export default class GjqController {
  @operation({
    summary: "Get Gjq",
  })
  @get()
  static getGjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gjq",
  })
  @post("{id}")
  static createGjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
