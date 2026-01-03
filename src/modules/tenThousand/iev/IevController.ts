import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ievs")
export default class IevController {
  @operation({
    summary: "Get Ievs",
  })
  @get()
  static getIevs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iev",
  })
  @post("{id}")
  static createIev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
