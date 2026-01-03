import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adds")
export default class AddController {
  @operation({
    summary: "Get Adds",
  })
  @get()
  static getAdds = procedure({
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
