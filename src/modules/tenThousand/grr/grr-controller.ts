import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grr")
export default class GrrController {
  @operation({
    summary: "Get Grr",
  })
  @get()
  static getGrr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grr",
  })
  @post("{id}")
  static createGrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
