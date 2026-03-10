import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("giy")
export default class GiyController {
  @operation({
    summary: "Get Giy",
  })
  @get()
  static getGiy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Giy",
  })
  @post("{id}")
  static createGiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
