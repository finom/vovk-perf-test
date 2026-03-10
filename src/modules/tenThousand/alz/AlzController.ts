import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alz")
export default class AlzController {
  @operation({
    summary: "Get Alz",
  })
  @get()
  static getAlz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alz",
  })
  @post("{id}")
  static createAlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
