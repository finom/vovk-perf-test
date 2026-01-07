import { procedure, prefix, get, post, operation } from "vovk";

@prefix("add")
export default class AddController {
  @operation({
    summary: "Get Add",
  })
  @get()
  static getAdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Add",
  })
  @post("{id}")
  static createAdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
