import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gp")
export default class GpController {
  @operation({
    summary: "Get Gp",
  })
  @get()
  static getGp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gp",
  })
  @post("{id}")
  static createGp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
