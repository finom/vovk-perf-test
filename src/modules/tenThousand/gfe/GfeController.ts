import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfe")
export default class GfeController {
  @operation({
    summary: "Get Gfe",
  })
  @get()
  static getGfe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfe",
  })
  @post("{id}")
  static createGfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
