import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aoe")
export default class AoeController {
  @operation({
    summary: "Get Aoe",
  })
  @get()
  static getAoe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aoe",
  })
  @post("{id}")
  static createAoe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
