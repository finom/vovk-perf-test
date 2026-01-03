import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbhs")
export default class GbhController {
  @operation({
    summary: "Get Gbhs",
  })
  @get()
  static getGbhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbh",
  })
  @post("{id}")
  static createGbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
