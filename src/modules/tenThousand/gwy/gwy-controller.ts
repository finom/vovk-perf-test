import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwy")
export default class GwyController {
  @operation({
    summary: "Get Gwy",
  })
  @get()
  static getGwy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gwy",
  })
  @post("{id}")
  static createGwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
