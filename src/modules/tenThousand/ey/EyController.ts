import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ey")
export default class EyController {
  @operation({
    summary: "Get Ey",
  })
  @get()
  static getEy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ey",
  })
  @post("{id}")
  static createEy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
