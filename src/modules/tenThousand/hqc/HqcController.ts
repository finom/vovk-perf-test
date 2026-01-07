import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqc")
export default class HqcController {
  @operation({
    summary: "Get Hqc",
  })
  @get()
  static getHqc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqc",
  })
  @post("{id}")
  static createHqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
