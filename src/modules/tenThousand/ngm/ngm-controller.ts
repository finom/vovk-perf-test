import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngm")
export default class NgmController {
  @operation({
    summary: "Get Ngm",
  })
  @get()
  static getNgm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngm",
  })
  @post("{id}")
  static createNgm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
