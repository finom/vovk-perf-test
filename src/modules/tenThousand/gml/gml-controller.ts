import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gml")
export default class GmlController {
  @operation({
    summary: "Get Gml",
  })
  @get()
  static getGml = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gml",
  })
  @post("{id}")
  static createGml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
