import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvv")
export default class GvvController {
  @operation({
    summary: "Get Gvv",
  })
  @get()
  static getGvv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvv",
  })
  @post("{id}")
  static createGvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
