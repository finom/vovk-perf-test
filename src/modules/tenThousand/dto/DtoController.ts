import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtos")
export default class DtoController {
  @operation({
    summary: "Get Dtos",
  })
  @get()
  static getDtos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dto",
  })
  @post("{id}")
  static createDto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
