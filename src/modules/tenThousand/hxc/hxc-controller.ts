import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxc")
export default class HxcController {
  @operation({
    summary: "Get Hxc",
  })
  @get()
  static getHxc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hxc",
  })
  @post("{id}")
  static createHxc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
