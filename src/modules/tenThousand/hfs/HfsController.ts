import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfs")
export default class HfsController {
  @operation({
    summary: "Get Hfs",
  })
  @get()
  static getHfs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfs",
  })
  @post("{id}")
  static createHfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
