import { procedure, prefix, get, post, operation } from "vovk";

@prefix("api")
export default class ApiController {
  @operation({
    summary: "Get Api",
  })
  @get()
  static getApi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Api",
  })
  @post("{id}")
  static createApi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
