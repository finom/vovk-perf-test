import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("alt")
export default class AltController {
  @operation({
    summary: "Get Alt",
  })
  @get()
  static getAlt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Alt",
  })
  @post("{id}")
  static createAlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
