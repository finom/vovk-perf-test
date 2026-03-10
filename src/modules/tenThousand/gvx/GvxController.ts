import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvx")
export default class GvxController {
  @operation({
    summary: "Get Gvx",
  })
  @get()
  static getGvx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvx",
  })
  @post("{id}")
  static createGvx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
