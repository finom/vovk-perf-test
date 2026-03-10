import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hyr")
export default class HyrController {
  @operation({
    summary: "Get Hyr",
  })
  @get()
  static getHyr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hyr",
  })
  @post("{id}")
  static createHyr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
