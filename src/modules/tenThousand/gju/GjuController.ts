import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gju")
export default class GjuController {
  @operation({
    summary: "Get Gju",
  })
  @get()
  static getGju = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gju",
  })
  @post("{id}")
  static createGju = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
