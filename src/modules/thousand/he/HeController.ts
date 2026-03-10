import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("he")
export default class HeController {
  @operation({
    summary: "Get He",
  })
  @get()
  static getHe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create He",
  })
  @post("{id}")
  static createHe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
