import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("xj")
export default class XjController {
  @operation({
    summary: "Get Xj",
  })
  @get()
  static getXj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Xj",
  })
  @post("{id}")
  static createXj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
