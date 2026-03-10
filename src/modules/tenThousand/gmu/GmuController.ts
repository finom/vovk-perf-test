import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmu")
export default class GmuController {
  @operation({
    summary: "Get Gmu",
  })
  @get()
  static getGmu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmu",
  })
  @post("{id}")
  static createGmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
