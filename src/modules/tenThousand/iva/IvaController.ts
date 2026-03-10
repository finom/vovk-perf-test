import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iva")
export default class IvaController {
  @operation({
    summary: "Get Iva",
  })
  @get()
  static getIva = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iva",
  })
  @post("{id}")
  static createIva = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
