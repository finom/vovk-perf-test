import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehs")
export default class EhsController {
  @operation({
    summary: "Get Ehs",
  })
  @get()
  static getEhs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ehs",
  })
  @post("{id}")
  static createEhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
