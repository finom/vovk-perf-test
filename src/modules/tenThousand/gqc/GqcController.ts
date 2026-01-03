import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqcs")
export default class GqcController {
  @operation({
    summary: "Get Gqcs",
  })
  @get()
  static getGqcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqc",
  })
  @post("{id}")
  static createGqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
