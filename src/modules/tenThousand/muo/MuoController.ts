import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("muo")
export default class MuoController {
  @operation({
    summary: "Get Muo",
  })
  @get()
  static getMuo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Muo",
  })
  @post("{id}")
  static createMuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
