import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ug")
export default class UgController {
  @operation({
    summary: "Get Ug",
  })
  @get()
  static getUg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ug",
  })
  @post("{id}")
  static createUg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
