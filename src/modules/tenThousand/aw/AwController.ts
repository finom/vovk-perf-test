import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aw")
export default class AwController {
  @operation({
    summary: "Get Aw",
  })
  @get()
  static getAw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aw",
  })
  @post("{id}")
  static createAw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
