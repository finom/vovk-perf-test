import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gos")
export default class GosController {
  @operation({
    summary: "Get Gos",
  })
  @get()
  static getGos = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gos",
  })
  @post("{id}")
  static createGos = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
