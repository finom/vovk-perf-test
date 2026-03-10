import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuo")
export default class CuoController {
  @operation({
    summary: "Get Cuo",
  })
  @get()
  static getCuo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cuo",
  })
  @post("{id}")
  static createCuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
