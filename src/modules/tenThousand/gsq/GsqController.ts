import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsq")
export default class GsqController {
  @operation({
    summary: "Get Gsq",
  })
  @get()
  static getGsq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gsq",
  })
  @post("{id}")
  static createGsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
