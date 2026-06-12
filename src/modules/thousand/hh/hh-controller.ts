import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hh")
export default class HhController {
  @operation({
    summary: "Get Hh",
  })
  @get()
  static getHh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hh",
  })
  @post("{id}")
  static createHh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
