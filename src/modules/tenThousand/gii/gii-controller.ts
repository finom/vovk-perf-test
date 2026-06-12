import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gii")
export default class GiiController {
  @operation({
    summary: "Get Gii",
  })
  @get()
  static getGii = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gii",
  })
  @post("{id}")
  static createGii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
