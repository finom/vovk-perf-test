import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvg")
export default class GvgController {
  @operation({
    summary: "Get Gvg",
  })
  @get()
  static getGvg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvg",
  })
  @post("{id}")
  static createGvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
