import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ux")
export default class UxController {
  @operation({
    summary: "Get Ux",
  })
  @get()
  static getUx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ux",
  })
  @post("{id}")
  static createUx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
