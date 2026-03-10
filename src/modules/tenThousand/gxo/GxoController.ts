import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxo")
export default class GxoController {
  @operation({
    summary: "Get Gxo",
  })
  @get()
  static getGxo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxo",
  })
  @post("{id}")
  static createGxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
