import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmo")
export default class GmoController {
  @operation({
    summary: "Get Gmo",
  })
  @get()
  static getGmo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmo",
  })
  @post("{id}")
  static createGmo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
