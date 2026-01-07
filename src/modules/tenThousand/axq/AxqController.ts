import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axq")
export default class AxqController {
  @operation({
    summary: "Get Axq",
  })
  @get()
  static getAxq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Axq",
  })
  @post("{id}")
  static createAxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
