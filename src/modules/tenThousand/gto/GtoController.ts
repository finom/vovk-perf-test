import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gto")
export default class GtoController {
  @operation({
    summary: "Get Gto",
  })
  @get()
  static getGto = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gto",
  })
  @post("{id}")
  static createGto = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
