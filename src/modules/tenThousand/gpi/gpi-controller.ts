import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpi")
export default class GpiController {
  @operation({
    summary: "Get Gpi",
  })
  @get()
  static getGpi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpi",
  })
  @post("{id}")
  static createGpi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
