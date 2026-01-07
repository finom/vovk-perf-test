import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axc")
export default class AxcController {
  @operation({
    summary: "Get Axc",
  })
  @get()
  static getAxc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axc",
  })
  @post("{id}")
  static createAxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
