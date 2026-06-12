import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hum")
export default class HumController {
  @operation({
    summary: "Get Hum",
  })
  @get()
  static getHum = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hum",
  })
  @post("{id}")
  static createHum = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
