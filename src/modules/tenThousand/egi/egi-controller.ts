import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egi")
export default class EgiController {
  @operation({
    summary: "Get Egi",
  })
  @get()
  static getEgi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egi",
  })
  @post("{id}")
  static createEgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
