import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avn")
export default class AvnController {
  @operation({
    summary: "Get Avn",
  })
  @get()
  static getAvn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avn",
  })
  @post("{id}")
  static createAvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
