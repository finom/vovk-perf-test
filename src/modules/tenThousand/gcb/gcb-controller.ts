import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gcb")
export default class GcbController {
  @operation({
    summary: "Get Gcb",
  })
  @get()
  static getGcb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gcb",
  })
  @post("{id}")
  static createGcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
