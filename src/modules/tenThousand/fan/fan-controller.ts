import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fan")
export default class FanController {
  @operation({
    summary: "Get Fan",
  })
  @get()
  static getFan = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fan",
  })
  @post("{id}")
  static createFan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
