import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gx")
export default class GxController {
  @operation({
    summary: "Get Gx",
  })
  @get()
  static getGx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gx",
  })
  @post("{id}")
  static createGx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
