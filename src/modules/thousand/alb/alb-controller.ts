import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alb")
export default class AlbController {
  @operation({
    summary: "Get Alb",
  })
  @get()
  static getAlb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alb",
  })
  @post("{id}")
  static createAlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
