import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxn")
export default class DxnController {
  @operation({
    summary: "Get Dxn",
  })
  @get()
  static getDxn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxn",
  })
  @post("{id}")
  static createDxn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
