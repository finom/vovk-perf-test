import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gve")
export default class GveController {
  @operation({
    summary: "Get Gve",
  })
  @get()
  static getGve = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gve",
  })
  @post("{id}")
  static createGve = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
