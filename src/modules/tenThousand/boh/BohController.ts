import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bohs")
export default class BohController {
  @operation({
    summary: "Get Bohs",
  })
  @get()
  static getBohs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Boh",
  })
  @post("{id}")
  static createBoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
