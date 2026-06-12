import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfv")
export default class GfvController {
  @operation({
    summary: "Get Gfv",
  })
  @get()
  static getGfv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfv",
  })
  @post("{id}")
  static createGfv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
