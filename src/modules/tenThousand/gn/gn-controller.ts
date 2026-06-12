import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gn")
export default class GnController {
  @operation({
    summary: "Get Gn",
  })
  @get()
  static getGn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gn",
  })
  @post("{id}")
  static createGn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
