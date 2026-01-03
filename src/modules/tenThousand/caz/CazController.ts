import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cazs")
export default class CazController {
  @operation({
    summary: "Get Cazs",
  })
  @get()
  static getCazs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Caz",
  })
  @post("{id}")
  static createCaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
