import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chm")
export default class ChmController {
  @operation({
    summary: "Get Chm",
  })
  @get()
  static getChm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chm",
  })
  @post("{id}")
  static createChm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
