import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxb")
export default class GxbController {
  @operation({
    summary: "Get Gxb",
  })
  @get()
  static getGxb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxb",
  })
  @post("{id}")
  static createGxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
