import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gat")
export default class GatController {
  @operation({
    summary: "Get Gat",
  })
  @get()
  static getGat = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gat",
  })
  @post("{id}")
  static createGat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
