import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhf")
export default class JhfController {
  @operation({
    summary: "Get Jhf",
  })
  @get()
  static getJhf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhf",
  })
  @post("{id}")
  static createJhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
