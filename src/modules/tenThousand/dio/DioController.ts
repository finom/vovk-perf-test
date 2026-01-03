import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dios")
export default class DioController {
  @operation({
    summary: "Get Dios",
  })
  @get()
  static getDios = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dio",
  })
  @post("{id}")
  static createDio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
