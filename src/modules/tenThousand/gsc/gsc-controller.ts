import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsc")
export default class GscController {
  @operation({
    summary: "Get Gsc",
  })
  @get()
  static getGsc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gsc",
  })
  @post("{id}")
  static createGsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
