import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hya")
export default class HyaController {
  @operation({
    summary: "Get Hya",
  })
  @get()
  static getHya = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hya",
  })
  @post("{id}")
  static createHya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
