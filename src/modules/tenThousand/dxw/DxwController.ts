import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxw")
export default class DxwController {
  @operation({
    summary: "Get Dxw",
  })
  @get()
  static getDxw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxw",
  })
  @post("{id}")
  static createDxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
