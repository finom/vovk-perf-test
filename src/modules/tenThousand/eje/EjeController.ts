import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eje")
export default class EjeController {
  @operation({
    summary: "Get Eje",
  })
  @get()
  static getEje = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eje",
  })
  @post("{id}")
  static createEje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
