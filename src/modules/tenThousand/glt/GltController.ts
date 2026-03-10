import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("glt")
export default class GltController {
  @operation({
    summary: "Get Glt",
  })
  @get()
  static getGlt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Glt",
  })
  @post("{id}")
  static createGlt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
