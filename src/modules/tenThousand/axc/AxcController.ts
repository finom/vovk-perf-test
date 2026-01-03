import { procedure, prefix, get, post, operation } from "vovk";

@prefix("axcs")
export default class AxcController {
  @operation({
    summary: "Get Axcs",
  })
  @get()
  static getAxcs = procedure({
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
