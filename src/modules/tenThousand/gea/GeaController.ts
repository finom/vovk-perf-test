import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gea")
export default class GeaController {
  @operation({
    summary: "Get Gea",
  })
  @get()
  static getGea = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gea",
  })
  @post("{id}")
  static createGea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
