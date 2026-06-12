import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvz")
export default class GvzController {
  @operation({
    summary: "Get Gvz",
  })
  @get()
  static getGvz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvz",
  })
  @post("{id}")
  static createGvz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
