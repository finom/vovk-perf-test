import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxo")
export default class DxoController {
  @operation({
    summary: "Get Dxo",
  })
  @get()
  static getDxo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxo",
  })
  @post("{id}")
  static createDxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
