import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxf")
export default class DxfController {
  @operation({
    summary: "Get Dxf",
  })
  @get()
  static getDxf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxf",
  })
  @post("{id}")
  static createDxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
