import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("md")
export default class MdController {
  @operation({
    summary: "Get Md",
  })
  @get()
  static getMd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Md",
  })
  @post("{id}")
  static createMd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
