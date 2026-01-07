import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqf")
export default class GqfController {
  @operation({
    summary: "Get Gqf",
  })
  @get()
  static getGqf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gqf",
  })
  @post("{id}")
  static createGqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
