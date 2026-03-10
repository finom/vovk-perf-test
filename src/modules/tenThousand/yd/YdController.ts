import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yd")
export default class YdController {
  @operation({
    summary: "Get Yd",
  })
  @get()
  static getYd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yd",
  })
  @post("{id}")
  static createYd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
