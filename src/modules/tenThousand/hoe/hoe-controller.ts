import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hoe")
export default class HoeController {
  @operation({
    summary: "Get Hoe",
  })
  @get()
  static getHoe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hoe",
  })
  @post("{id}")
  static createHoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
