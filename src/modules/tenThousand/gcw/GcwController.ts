import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcw")
export default class GcwController {
  @operation({
    summary: "Get Gcw",
  })
  @get()
  static getGcw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gcw",
  })
  @post("{id}")
  static createGcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
