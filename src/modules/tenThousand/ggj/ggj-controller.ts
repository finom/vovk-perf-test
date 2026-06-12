import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggj")
export default class GgjController {
  @operation({
    summary: "Get Ggj",
  })
  @get()
  static getGgj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ggj",
  })
  @post("{id}")
  static createGgj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
