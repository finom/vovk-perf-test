import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wj")
export default class WjController {
  @operation({
    summary: "Get Wj",
  })
  @get()
  static getWj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Wj",
  })
  @post("{id}")
  static createWj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
