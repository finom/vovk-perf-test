import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ais")
export default class AisController {
  @operation({
    summary: "Get Ais",
  })
  @get()
  static getAis = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ais",
  })
  @post("{id}")
  static createAis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
