import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvb")
export default class GvbController {
  @operation({
    summary: "Get Gvb",
  })
  @get()
  static getGvb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvb",
  })
  @post("{id}")
  static createGvb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
