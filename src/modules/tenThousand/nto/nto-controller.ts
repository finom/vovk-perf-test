import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nto")
export default class NtoController {
  @operation({
    summary: "Get Nto",
  })
  @get()
  static getNto = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nto",
  })
  @post("{id}")
  static createNto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
