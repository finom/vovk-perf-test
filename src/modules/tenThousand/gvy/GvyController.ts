import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvy")
export default class GvyController {
  @operation({
    summary: "Get Gvy",
  })
  @get()
  static getGvy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvy",
  })
  @post("{id}")
  static createGvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
