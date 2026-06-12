import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("edy")
export default class EdyController {
  @operation({
    summary: "Get Edy",
  })
  @get()
  static getEdy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Edy",
  })
  @post("{id}")
  static createEdy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
