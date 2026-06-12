import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfk")
export default class GfkController {
  @operation({
    summary: "Get Gfk",
  })
  @get()
  static getGfk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfk",
  })
  @post("{id}")
  static createGfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
