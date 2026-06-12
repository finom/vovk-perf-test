import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkb")
export default class FkbController {
  @operation({
    summary: "Get Fkb",
  })
  @get()
  static getFkb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fkb",
  })
  @post("{id}")
  static createFkb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
