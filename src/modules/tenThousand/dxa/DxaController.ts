import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dxa")
export default class DxaController {
  @operation({
    summary: "Get Dxa",
  })
  @get()
  static getDxa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dxa",
  })
  @post("{id}")
  static createDxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
