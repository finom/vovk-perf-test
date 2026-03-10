import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbl")
export default class GblController {
  @operation({
    summary: "Get Gbl",
  })
  @get()
  static getGbl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbl",
  })
  @post("{id}")
  static createGbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
