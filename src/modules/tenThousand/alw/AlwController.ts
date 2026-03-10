import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alw")
export default class AlwController {
  @operation({
    summary: "Get Alw",
  })
  @get()
  static getAlw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alw",
  })
  @post("{id}")
  static createAlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
