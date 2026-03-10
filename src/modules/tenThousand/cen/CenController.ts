import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cen")
export default class CenController {
  @operation({
    summary: "Get Cen",
  })
  @get()
  static getCen = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cen",
  })
  @post("{id}")
  static createCen = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
