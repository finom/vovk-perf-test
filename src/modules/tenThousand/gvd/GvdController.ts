import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvd")
export default class GvdController {
  @operation({
    summary: "Get Gvd",
  })
  @get()
  static getGvd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvd",
  })
  @post("{id}")
  static createGvd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
