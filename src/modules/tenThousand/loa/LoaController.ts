import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("loa")
export default class LoaController {
  @operation({
    summary: "Get Loa",
  })
  @get()
  static getLoa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Loa",
  })
  @post("{id}")
  static createLoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
