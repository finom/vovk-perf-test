import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gom")
export default class GomController {
  @operation({
    summary: "Get Gom",
  })
  @get()
  static getGom = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gom",
  })
  @post("{id}")
  static createGom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
