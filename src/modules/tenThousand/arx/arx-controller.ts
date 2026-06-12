import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arx")
export default class ArxController {
  @operation({
    summary: "Get Arx",
  })
  @get()
  static getArx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Arx",
  })
  @post("{id}")
  static createArx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
