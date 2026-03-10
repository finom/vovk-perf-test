import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erv")
export default class ErvController {
  @operation({
    summary: "Get Erv",
  })
  @get()
  static getErv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erv",
  })
  @post("{id}")
  static createErv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
