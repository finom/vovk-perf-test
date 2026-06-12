import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lan")
export default class LanController {
  @operation({
    summary: "Get Lan",
  })
  @get()
  static getLan = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lan",
  })
  @post("{id}")
  static createLan = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
