import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amg")
export default class AmgController {
  @operation({
    summary: "Get Amg",
  })
  @get()
  static getAmg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Amg",
  })
  @post("{id}")
  static createAmg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
