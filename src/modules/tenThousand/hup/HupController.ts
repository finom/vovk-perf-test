import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hup")
export default class HupController {
  @operation({
    summary: "Get Hup",
  })
  @get()
  static getHup = procedure({
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
