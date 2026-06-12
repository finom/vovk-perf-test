import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("luo")
export default class LuoController {
  @operation({
    summary: "Get Luo",
  })
  @get()
  static getLuo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Luo",
  })
  @post("{id}")
  static createLuo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
