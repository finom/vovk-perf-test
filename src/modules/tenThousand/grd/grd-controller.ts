import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grd")
export default class GrdController {
  @operation({
    summary: "Get Grd",
  })
  @get()
  static getGrd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grd",
  })
  @post("{id}")
  static createGrd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
