import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("efx")
export default class EfxController {
  @operation({
    summary: "Get Efx",
  })
  @get()
  static getEfx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Efx",
  })
  @post("{id}")
  static createEfx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
