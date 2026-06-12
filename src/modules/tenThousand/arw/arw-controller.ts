import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arw")
export default class ArwController {
  @operation({
    summary: "Get Arw",
  })
  @get()
  static getArw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Arw",
  })
  @post("{id}")
  static createArw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
