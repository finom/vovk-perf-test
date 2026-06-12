import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxz")
export default class DxzController {
  @operation({
    summary: "Get Dxz",
  })
  @get()
  static getDxz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxz",
  })
  @post("{id}")
  static createDxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
