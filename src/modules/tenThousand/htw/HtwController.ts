import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htws")
export default class HtwController {
  @operation({
    summary: "Get Htws",
  })
  @get()
  static getHtws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htw",
  })
  @post("{id}")
  static createHtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
