import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hab")
export default class HabController {
  @operation({
    summary: "Get Hab",
  })
  @get()
  static getHab = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hab",
  })
  @post("{id}")
  static createHab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
