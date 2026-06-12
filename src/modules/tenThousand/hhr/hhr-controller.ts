import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhr")
export default class HhrController {
  @operation({
    summary: "Get Hhr",
  })
  @get()
  static getHhr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhr",
  })
  @post("{id}")
  static createHhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
