import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("yj")
export default class YjController {
  @operation({
    summary: "Get Yj",
  })
  @get()
  static getYj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Yj",
  })
  @post("{id}")
  static createYj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
