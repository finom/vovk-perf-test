import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxf")
export default class LxfController {
  @operation({
    summary: "Get Lxf",
  })
  @get()
  static getLxf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxf",
  })
  @post("{id}")
  static createLxf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
