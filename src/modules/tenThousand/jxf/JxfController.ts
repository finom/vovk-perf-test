import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxf")
export default class JxfController {
  @operation({
    summary: "Get Jxf",
  })
  @get()
  static getJxf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxf",
  })
  @post("{id}")
  static createJxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
