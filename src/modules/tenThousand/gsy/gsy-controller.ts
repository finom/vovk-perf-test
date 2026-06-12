import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsy")
export default class GsyController {
  @operation({
    summary: "Get Gsy",
  })
  @get()
  static getGsy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gsy",
  })
  @post("{id}")
  static createGsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
