import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjs")
export default class GjsController {
  @operation({
    summary: "Get Gjs",
  })
  @get()
  static getGjs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gjs",
  })
  @post("{id}")
  static createGjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
