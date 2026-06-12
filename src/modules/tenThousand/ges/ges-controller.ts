import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ges")
export default class GesController {
  @operation({
    summary: "Get Ges",
  })
  @get()
  static getGes = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ges",
  })
  @post("{id}")
  static createGes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
