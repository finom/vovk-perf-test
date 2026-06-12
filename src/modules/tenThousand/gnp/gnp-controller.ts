import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnp")
export default class GnpController {
  @operation({
    summary: "Get Gnp",
  })
  @get()
  static getGnp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gnp",
  })
  @post("{id}")
  static createGnp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
