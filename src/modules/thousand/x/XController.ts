import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("x")
export default class XController {
  @operation({
    summary: "Get X",
  })
  @get()
  static getX = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create X",
  })
  @post("{id}")
  static createX = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
