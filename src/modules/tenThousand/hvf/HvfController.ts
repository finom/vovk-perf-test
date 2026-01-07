import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvf")
export default class HvfController {
  @operation({
    summary: "Get Hvf",
  })
  @get()
  static getHvf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvf",
  })
  @post("{id}")
  static createHvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
