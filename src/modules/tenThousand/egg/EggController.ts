import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egg")
export default class EggController {
  @operation({
    summary: "Get Egg",
  })
  @get()
  static getEgg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egg",
  })
  @post("{id}")
  static createEgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
