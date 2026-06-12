import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gxz")
export default class GxzController {
  @operation({
    summary: "Get Gxz",
  })
  @get()
  static getGxz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gxz",
  })
  @post("{id}")
  static createGxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
