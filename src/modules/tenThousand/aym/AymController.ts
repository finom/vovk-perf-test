import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aym")
export default class AymController {
  @operation({
    summary: "Get Aym",
  })
  @get()
  static getAym = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aym",
  })
  @post("{id}")
  static createAym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
