import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("giu")
export default class GiuController {
  @operation({
    summary: "Get Giu",
  })
  @get()
  static getGiu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Giu",
  })
  @post("{id}")
  static createGiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
