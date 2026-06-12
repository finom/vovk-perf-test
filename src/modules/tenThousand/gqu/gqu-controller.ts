import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqu")
export default class GquController {
  @operation({
    summary: "Get Gqu",
  })
  @get()
  static getGqu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqu",
  })
  @post("{id}")
  static createGqu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
