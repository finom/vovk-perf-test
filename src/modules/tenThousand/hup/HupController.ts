import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hups")
export default class HupController {
  @operation({
    summary: "Get Hups",
  })
  @get()
  static getHups = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hup",
  })
  @post("{id}")
  static createHup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
