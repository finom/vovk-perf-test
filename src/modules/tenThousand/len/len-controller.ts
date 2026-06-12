import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("len")
export default class LenController {
  @operation({
    summary: "Get Len",
  })
  @get()
  static getLen = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Len",
  })
  @post("{id}")
  static createLen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
